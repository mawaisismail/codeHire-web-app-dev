import { FC, ReactNode } from "react";
import { Header } from "@/components/mainLayout/header/Header";

interface IMainLayout {
  children: ReactNode;
}
export const MainLayout: FC<IMainLayout> = ({ children }) => {
  return (
    <>
      <div>
        <Header />
        {children}
      </div>
    </>
  );
};
