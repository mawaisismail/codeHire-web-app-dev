import { FC, ReactNode } from "react";
import { Inter } from "@next/font/google";
import { Header } from "@/components/common/Header";

interface IMainLayout {
  children: ReactNode;
}
const inter = Inter({ subsets: ["latin"] });
export const MainLayout: FC<IMainLayout> = ({ children }) => {
  return (
    <>
      <div className={inter.className}>
        <Header />
        {children}
      </div>
    </>
  );
};
