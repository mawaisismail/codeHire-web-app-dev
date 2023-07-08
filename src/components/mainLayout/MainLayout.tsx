import { FC, ReactNode } from "react";
import { Header } from "@/components/mainLayout/header/Header";
import { Loader } from "@/components/Loader/loader";

interface IMainLayout {
  children: ReactNode;
}
export const MainLayout: FC<IMainLayout> = ({ children }) => {
  return (
    <>
      <div>
        <Loader />
        <Header />
        {children}
      </div>
    </>
  );
};
