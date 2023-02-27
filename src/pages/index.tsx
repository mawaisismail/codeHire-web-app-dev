import { Client } from "@/components/Browse/Client";
import { NavComp } from "@/components/Nav_Com/NavComp";
import { BrowserJob } from "@/components/BrowserJob/BrowserJob";
import { JobWork } from "@/components/JobWork/JobWork";
import { Card } from "@/components/Card/Card";
import { Subscribe } from "@/components/Subscribe/Subscribe";
import { Footer } from "@/components/Footer/Footer";
import { HeroSection } from "@/components/HearoSection/HeroSection";

const Pages = () => {
  return (
    <div>
      <GlobalProvider>
        <MainLayout>
          <Header />
          <HeroSection />
          <BrowserJob />
          <NavComp />
          <JobWork />
          <Client />
          <Card />
          <Subscribe />
          <Footer />
        </MainLayout>
      </GlobalProvider>
    </div>
  );
};
export default Pages;
