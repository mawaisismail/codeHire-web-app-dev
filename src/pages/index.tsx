import { Header } from "@/components/common/Header";
import { MainLayout } from "@/components/mainLayout/MainLayout";
import { GlobalProvider } from "../../utils/context/GlobalProvider";
import { Signup } from "@/components/signUp/signUp";
import { Login } from "@/components/mainLayout/Login";

const Pages = () => {
  return (
    <div>
      <GlobalProvider>
        <MainLayout>
          <Header />
          <Signup />
          <Login />
        </MainLayout>
      </GlobalProvider>
    </div>
  );
};
export default Pages;
