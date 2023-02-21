import { Header } from "@/components/common/Header";
import { MainLayout } from "@/components/mainLayout/MainLayout";
import { GlobalProvider } from "../../utils/context/GlobalProvider";
import { Client } from "@/components/Browse/Client";
import { Working } from "@/components/Working/Working";

const Pages = () => {
  return (
    <div>
      <GlobalProvider>
        <MainLayout>
          <Header />
          <Client />
          <Working />
        </MainLayout>
      </GlobalProvider>
    </div>
  );
};
export default Pages;
