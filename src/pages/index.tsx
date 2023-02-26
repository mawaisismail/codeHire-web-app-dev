import { Header } from "@/components/common/Header";
import { MainLayout } from "@/components/mainLayout/MainLayout";
import { GlobalProvider } from "../../utils/context/GlobalProvider";
import { Client } from "@/components/Browse/Client";
import { NavComp } from "@/components/Nav_Com/NavComp";
import { BrowserJob } from "@/components/BrowserJob/BrowserJob";

const Pages = () => {
  return (
    <div>
      <GlobalProvider>
        <MainLayout>
          <Header />
          <BrowserJob />
          <NavComp />
          <Client />
        </MainLayout>
      </GlobalProvider>
    </div>
  );
};
export default Pages;
