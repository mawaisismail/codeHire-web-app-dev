import { Header } from "@/components/common/Header";
import { MainLayout } from "@/components/mainLayout/MainLayout";
import { GlobalProvider } from "../../utils/context/GlobalProvider";
import { Signup } from "@/components/signUp/signUp";
import { Login } from "@/components/mainLayout/Login";
import { Client } from "@/components/Browse/Client";
import { NavComp } from "@/components/Nav_Com/NavComp";

const Pages = () => {
  return (
    <div>
      <GlobalProvider>
        <MainLayout>
          <Header />
          <Signup />
          <Login />
          <NavComp />
          <Client />
        </MainLayout>
      </GlobalProvider>
    </div>
  );
};
export default Pages;
