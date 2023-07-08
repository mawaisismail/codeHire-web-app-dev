import { ApolloProvider } from "@apollo/client";
import "../../styles/globals.scss";
import client from "../../utils/client";
import "react-toastify/dist/ReactToastify.css";
import { MainLayout } from "@/components/mainLayout/MainLayout";
import { GlobalProvider } from "../../utils/context/GlobalProvider";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { ToastContainer } from "react-toastify";
import { Loader } from "@/components/Loader/loader";

export default function App({ Component, pageProps }: any) {
  if (Component.getLayout) {
    return Component.getLayout(
      <ApolloProvider client={client}>
        <GlobalProvider>
          <Component {...pageProps} />
          <ToastContainer />
        </GlobalProvider>
      </ApolloProvider>
    );
  }
  return (
    <div>
      <ApolloProvider client={client}>
        <GlobalProvider>
          <MainLayout>
            <Component {...pageProps} />
            <ToastContainer />
          </MainLayout>
        </GlobalProvider>
      </ApolloProvider>
    </div>
  );
}
