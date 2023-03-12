import { FC, ReactNode } from "react";
import { Inter } from "@next/font/google";
import { Header } from "@/components/common/Header";

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
