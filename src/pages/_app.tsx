import { ApolloProvider } from "@apollo/client";
import client from "../../utils/client";

export default function App({ Component, pageProps }: any) {
  return (
    <div>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </div>
  );
}
