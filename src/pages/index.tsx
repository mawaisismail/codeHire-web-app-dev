import { Header } from "@/components/common/Header";
import { MainLayout } from "@/components/mainLayout/MainLayout";
import { GlobalProvider } from "../../utils/context/GlobalProvider";
import { Client } from "@/components/Browse/Client";

import { Working } from "@/components/JobWorking/Working";

import { BrowserJob } from "@/components/BrowserJob/BrowserJob";


const Pages = () => {
  return (
    <div>
      <GlobalProvider>
        <MainLayout>
          <Header />
          <BrowserJob />
          <Client />
          <Working />
        </MainLayout>
      </GlobalProvider>
    </div>
  );
};
export default Pages;
