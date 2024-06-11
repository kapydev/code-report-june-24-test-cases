import { FunctionComponent } from "react";
import DropdownHeaderNavigation from "../components/DropdownHeaderNavigation";
import FrameComponent from "../components/FrameComponent";
import FeaturesSection from "../components/FeaturesSection";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const Pricing: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <DropdownHeaderNavigation />
      <FrameComponent />
      <FeaturesSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Pricing;
