import { FC, ReactNode } from "react";
import { Inter, Ubuntu } from "@next/font/google";

interface IMainLayout {
  children: ReactNode;
}
const inter = Inter({ subsets: ["latin"] });
export const MainLayout: FC<IMainLayout> = ({ children }) => {
  return <div className={inter.className}>{children}</div>;
};
