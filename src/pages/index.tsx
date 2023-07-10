import { HeroSection } from "@/components/HearoSection/HeroSection";
import { BrowserJob } from "@/components/BrowserJob/BrowserJob";
import { HowItWork } from "@/components/howItWork/JobWork";
import { Footer } from "@/components/mainLayout/Footer/Footer";
import { useContext } from "react";
import { GlobalContext } from "../../utils/context/GlobalProvider";
import { NewJobs } from "@/components/user/jobs/newJobs/newJobs";
import { OurTeam } from "@/components/owners/OurTeam";
import { AnimatedCounter } from "@/components/AnimatedCounter/AnimatedCounter";
import { Testimonials } from "@/components/owners/testimonials";
import { Recommended } from "@/components/user/jobs/recommendedJobs/recommended";

const Pages = () => {
  const [{ baseUser }] = useContext(GlobalContext);
  return (
    <div>
      <HeroSection />
      <BrowserJob />
      {baseUser?.uid && <Recommended />}
      <AnimatedCounter />
      <NewJobs />

      <OurTeam />
      {!baseUser?.uid && <HowItWork />}
      <Testimonials />
      <Footer />
    </div>
  );
};
export default Pages;
