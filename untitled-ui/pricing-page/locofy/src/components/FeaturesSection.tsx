import { FunctionComponent } from "react";
import FeatureText from "./FeatureText";

export type FeaturesSectionType = {
  className?: string;
};

const FeaturesSection: FunctionComponent<FeaturesSectionType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch bg-gray-50 overflow-hidden flex flex-col items-center justify-start py-24 px-20 box-border gap-[64px] max-w-full text-left text-base text-brand-700 font-text-md-regular mq750:gap-[32px] mq750:pl-10 mq750:pr-10 mq750:box-border mq450:gap-[16px] mq450:pt-10 mq450:pb-10 mq450:box-border mq1050:pt-[62px] mq1050:pb-[62px] mq1050:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start py-0 px-8 box-border max-w-full mq750:gap-[16px]">
        <div className="self-stretch flex flex-col items-start justify-start max-w-full mq450:gap-[24px]">
          <div className="w-[768px] flex flex-col items-start justify-start gap-[20px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
              <div className="self-stretch relative leading-[24px] font-semibold">
                Features
              </div>
              <h1 className="m-0 self-stretch relative text-17xl tracking-[-0.02em] leading-[44px] font-semibold font-inherit text-gray-900 mq750:text-10xl mq750:leading-[35px] mq450:text-3xl mq450:leading-[26px]">
                Beautiful analytics to grow smarter
              </h1>
            </div>
            <p className="m-0 self-stretch relative text-xl leading-[30px] text-gray-600 mq450:text-base mq450:leading-[24px]">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </p>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 px-8 box-border gap-[64px_30px] min-h-[508px] max-w-full text-xl text-gray-900">
        <FeatureText
          featuredIcon="/featured-icon.svg"
          featureTitle="Share team inboxes"
          supportingText="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
        />
        <FeatureText
          featuredIcon="/featured-icon-1.svg"
          featureTitle="Deliver instant answers"
          supportingText="An all-in-one customer service platform that helps you balance everything your customers need to be happy."
        />
        <FeatureText
          featuredIcon="/featured-icon-2.svg"
          featureTitle="Manage your team with reports"
          supportingText="Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
        />
        <FeatureText
          featuredIcon="/featured-icon-3.svg"
          featureTitle="Connect with customers"
          supportingText="Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion."
        />
        <FeatureText
          featuredIcon="/featured-icon-4.svg"
          featureTitle="Connect the tools you already use"
          supportingText="Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools."
        />
        <FeatureText
          featuredIcon="/featured-icon-5.svg"
          featureTitle="Our people make the difference"
          supportingText="We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help."
        />
      </div>
    </section>
  );
};

export default FeaturesSection;
