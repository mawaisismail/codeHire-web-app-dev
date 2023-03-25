import { ApolloProvider } from "@apollo/client";
import "../../styles/globals.scss";
import client from "../../utils/client";
import { AppProps } from "next/app";
import { MainLayout } from "@/components/mainLayout/MainLayout";
import { GlobalProvider } from "../../utils/context/GlobalProvider";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <ApolloProvider client={client}>
        <GlobalProvider>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </GlobalProvider>
      </ApolloProvider>
    </div>
  );
}
