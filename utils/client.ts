import { ApolloClient, createHttpLink, InMemoryCache, split } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getClientCookie } from "../constants/utils/cookies";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

const httpLink = createHttpLink({
    uri: "http://localhost:3020/graphql",
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = getClientCookie("baseUser").token;
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        },
    };
});

const wsLink =
    typeof window !== "undefined"
        ? new WebSocketLink({
            uri: "ws://localhost:3020/graphql",
            options: {
                reconnect: true,
            },
        })
        : null;

const link =
    typeof window !== "undefined" && wsLink != null
        ? split(
            ({ query }) => {
                const def = getMainDefinition(query);
                return (
                    def.kind === "OperationDefinition" &&
                    def.operation === "subscription"
                );
            },
            wsLink,
            httpLink
        )
        : httpLink;

const client = new ApolloClient({
    link: authLink.concat(link),
    cache: new InMemoryCache(),
});

export default client;
