import { Header } from "@/components/common/Header";
import { MainLayout } from "@/components/mainLayout/MainLayout";
import { GlobalProvider } from "../../utils/context/GlobalProvider";
import {Browse} from "@/components/Browse/Browse";

const Pages = () => {
  return (
    <div>
      <GlobalProvider>
        <MainLayout>
          <Header />
            <Browse />
        </MainLayout>
      </GlobalProvider>
    </div>
  );
};
export default Pages;
