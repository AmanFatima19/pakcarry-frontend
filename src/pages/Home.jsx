import React from "react";
import HeroSection from "../components/ui/HeroSection";
import Counter from "../components/ui/Counter";
import AboutSection from "../components/ui/AboutSection";
import HowItWorks from "../components/ui/HowItWorks";
import ItemsToDeliver from "../components/ui/ItemsToDeliver";
import Guarantees from "../components/ui/Guarantees";
import FAQS from "../components/ui/FAQs";
import Testimonials from "../components/common/Testimonials";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Counter />
      <AboutSection />
      <HowItWorks />
      <ItemsToDeliver />
      <Guarantees />
      <Testimonials />
      <FAQS />
    </div>
  );
};

export default Home;
