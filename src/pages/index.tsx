import { NavComp } from "@/components/Nav_Com/NavComp";
import { Card } from "@/components/Card/Card";
import { Subscribe } from "@/components/Subscribe/Subscribe";
import { Footer } from "@/components/Footer/Footer";
import { HeroSection } from "@/components/HearoSection/HeroSection";
import { BrowserJob } from "@/components/BrowserJob/BrowserJob";
import { JobWork } from "@/components/JobWork/JobWork";
import { Client } from "@/components/Browse/Client";
import { Slide } from "@/components/Slide/Slide";
import { JobNav } from "@/components/JobNavbar/JobNav";

const Pages = () => {
  return (
    <div>
      <HeroSection />
      <BrowserJob />
      <JobNav />
      <NavComp />
      <JobWork />
      <Client />
      <Card />
      <Slide />
      <Subscribe />
      <Footer />
    </div>
  );
};
export default Pages;
