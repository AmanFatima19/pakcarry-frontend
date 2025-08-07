import React from "react";
import AboutFirstSection from "../components/ui/AboutFirstSection";
import CostEfficiencySection from "../components/ui/CostEfficiencySection";
import SecurityAssurance from "../components/ui/SecurityAssurance";
import SwiftDeliverySection from "../components/ui/SwiftDeliverySection";
import Vision from "../components/ui/Vision";
import MissionSection from "../components/ui/MissionSection";
import Testimonials from "../components/common/Testimonials";

const About = () => {
  return (
    <div>
      <AboutFirstSection />
      <CostEfficiencySection />
      <SecurityAssurance />
      <SwiftDeliverySection />
      <Vision />
      <MissionSection />
      <Testimonials />
    </div>
  );
};

export default About;
