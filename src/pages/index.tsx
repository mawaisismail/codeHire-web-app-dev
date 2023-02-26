import { Client } from "@/components/Browse/Client";
import { NavComp } from "@/components/Nav_Com/NavComp";
import { BrowserJob } from "@/components/BrowserJob/BrowserJob";

const Pages = () => {
  return (
    <div>
      <BrowserJob />
      <NavComp />
      <Client />
    </div>
  );
};
export default Pages;
