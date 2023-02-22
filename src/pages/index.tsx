import { Header } from "@/components/common/Header";
import { MainLayout } from "@/components/mainLayout/MainLayout";
import { GlobalProvider } from "../../utils/context/GlobalProvider";
import { Client } from "@/components/Browse/Client";
import { BrowserJob } from "@/components/BrowserJob/BrowserJob";
import { RandomJob } from "@/components/RandomJob/RandomJob";

const Pages = () => {
  return (
    <div>
      <GlobalProvider>
        <MainLayout>
          <Header />
          <BrowserJob />
          <RandomJob />
          <Client />
        </MainLayout>
      </GlobalProvider>
    </div>
  );
};
export default Pages;
