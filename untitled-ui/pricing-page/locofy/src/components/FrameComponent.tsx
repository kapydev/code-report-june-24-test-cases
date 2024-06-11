import { FunctionComponent } from "react";
import PricingTierCard from "./PricingTierCard";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-24 box-border max-w-full text-left text-base text-brand-600 font-text-md-regular mq750:pb-10 mq750:box-border mq1050:pb-[62px] mq1050:box-border ${className}`}
    >
      <div className="self-stretch bg-white flex flex-col items-center justify-start py-24 px-20 box-border max-w-full mq750:gap-[32px] mq750:pl-10 mq750:pr-10 mq750:box-border mq450:gap-[16px]">
        <div className="self-stretch flex flex-col items-start justify-start py-0 px-8 box-border max-w-full mq750:gap-[16px]">
          <div className="self-stretch flex flex-col items-start justify-start max-w-full mq450:gap-[20px]">
            <div className="w-[768px] flex flex-col items-start justify-start gap-[24px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                <b className="self-stretch relative leading-[24px] font-semibold">
                  Pricing
                </b>
                <h1 className="m-0 self-stretch relative text-29xl tracking-[-0.02em] leading-[60px] font-semibold font-inherit text-gray-900 mq750:text-19xl mq750:leading-[48px] mq450:text-10xl mq450:leading-[36px]">
                  Simple, transparent pricing
                </h1>
              </div>
              <p className="m-0 self-stretch relative text-xl leading-[30px] text-gray-600 mq450:text-base mq450:leading-[24px]">
                We believe Untitled should be accessible to all companies, no
                matter the size.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-sm text-brand-700">
        <div className="w-[1216px] flex flex-row flex-wrap items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
          <div className="flex-1 shadow-[0px_12px_16px_-4px_rgba(16,_24,_40,_0.08),_0px_4px_6px_-2px_rgba(16,_24,_40,_0.03)] rounded-2xl bg-white box-border flex flex-col items-start justify-start pt-[38px] px-0 pb-0 relative min-w-[288px] max-w-full border-[1px] border-solid border-gray-200">
            <img
              className="w-[68.7px] h-[57px] absolute !m-[0] top-[-25.7px] right-[23.8px] object-contain"
              loading="lazy"
              alt=""
              src="/handdrawn-arrow@2x.png"
            />
            <div className="absolute !m-[0] top-[-30px] right-[-68.5px] leading-[20px] font-medium inline-block min-w-[93px]">
              Most popular!
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-8 text-center text-29xl text-gray-900">
              <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-[65px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <b className="w-[190px] relative tracking-[-0.02em] leading-[60px] font-semibold inline-block mq750:text-19xl mq750:leading-[48px] mq450:text-10xl mq450:leading-[36px]">
                    $10/mth
                  </b>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-xl">
                  <b className="self-stretch relative leading-[30px] font-semibold mq450:text-base mq450:leading-[24px]">
                    Basic plan
                  </b>
                  <div className="self-stretch relative text-base leading-[24px] text-gray-600">
                    Billed annually.
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start pt-8 px-8 pb-10 text-base text-gray-600">
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[12px] mq450:flex-wrap">
                  <img
                    className="h-6 w-6 relative rounded-xl overflow-hidden shrink-0 min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/check-icon.svg"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start min-w-[185px]">
                    <div className="self-stretch relative leading-[24px]">
                      Access to all basic features
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[12px] mq450:flex-wrap">
                  <img
                    className="h-6 w-6 relative rounded-xl overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/check-icon.svg"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start min-w-[185px]">
                    <div className="self-stretch relative leading-[24px]">
                      Basic reporting and analytics
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[12px] mq450:flex-wrap">
                  <img
                    className="h-6 w-6 relative rounded-xl overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/check-icon.svg"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start min-w-[185px]">
                    <div className="self-stretch relative leading-[24px]">
                      Up to 10 individual users
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[12px] mq450:flex-wrap">
                  <img
                    className="h-6 w-6 relative rounded-xl overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/check-icon.svg"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start min-w-[185px]">
                    <p className="m-0 self-stretch relative leading-[24px]">
                      20GB individual data each user
                    </p>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[12px] mq450:flex-wrap">
                  <img
                    className="h-6 w-6 relative rounded-xl overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/check-icon.svg"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start min-w-[185px]">
                    <p className="m-0 self-stretch relative leading-[24px]">
                      Basic chat and email support
                    </p>
                  </div>
                </div>
                <div className="self-stretch hidden flex-row items-start justify-start gap-[12px] mq450:flex-wrap">
                  <img
                    className="h-6 w-6 relative rounded-xl overflow-hidden shrink-0"
                    alt=""
                    src="/check-icon.svg"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start min-w-[185px]">
                    <div className="self-stretch h-6 relative leading-[24px] inline-block">
                      Another feature
                    </div>
                  </div>
                </div>
                <div className="self-stretch hidden flex-row items-start justify-start gap-[12px] mq450:flex-wrap">
                  <img
                    className="h-6 w-6 relative rounded-xl overflow-hidden shrink-0"
                    alt=""
                    src="/check-icon.svg"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start min-w-[185px]">
                    <div className="self-stretch h-6 relative leading-[24px] inline-block">
                      Another feature
                    </div>
                  </div>
                </div>
                <div className="self-stretch hidden flex-row items-start justify-start gap-[12px] mq450:flex-wrap">
                  <img
                    className="h-6 w-6 relative rounded-xl overflow-hidden shrink-0"
                    alt=""
                    src="/check-icon.svg"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start min-w-[185px]">
                    <div className="self-stretch h-6 relative leading-[24px] inline-block">
                      Another feature
                    </div>
                  </div>
                </div>
                <div className="self-stretch hidden flex-row items-start justify-start gap-[12px] mq450:flex-wrap">
                  <img
                    className="h-6 w-6 relative rounded-xl overflow-hidden shrink-0"
                    alt=""
                    src="/check-icon.svg"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start min-w-[185px]">
                    <div className="self-stretch h-6 relative leading-[24px] inline-block">
                      Another feature
                    </div>
                  </div>
                </div>
                <div className="self-stretch hidden flex-row items-start justify-start gap-[12px] mq450:flex-wrap">
                  <img
                    className="h-6 w-6 relative rounded-xl overflow-hidden shrink-0"
                    alt=""
                    src="/check-icon.svg"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start min-w-[185px]">
                    <div className="self-stretch h-6 relative leading-[24px] inline-block">
                      Another feature
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-8 pb-8">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-start justify-start gap-[12px]">
                <div className="self-stretch rounded-lg flex flex-row items-start justify-start">
                  <div className="flex-1 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-brand-600 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 whitespace-nowrap border-[1px] border-solid border-brand-600">
                    <b className="relative text-base leading-[24px] font-semibold font-text-md-regular text-white text-left inline-block min-w-[89px]">
                      Get started
                    </b>
                  </div>
                </div>
                <div className="w-[294px] rounded-lg hidden flex-row items-start justify-start">
                  <div className="h-12 flex-1 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-white box-border overflow-hidden flex flex-row items-center justify-center py-3 px-5 whitespace-nowrap border-[1px] border-solid border-gray-300">
                    <div className="self-stretch relative text-base leading-[24px] font-semibold font-text-md-regular text-gray-700 text-left">
                      Chat to sales
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <PricingTierCard
            price="$20/mth"
            heading="Business plan"
            text="200+ integrations"
            text1="Advanced reporting and analytics"
            text2="Up to 20 individual users"
            text3="40GB individual data each user"
            text4="Priority chat and email support"
          />
          <PricingTierCard
            price="$40/mth"
            heading="Enterprise plan"
            text="Advanced custom fields"
            text1="Audit log and data history"
            text2="Unlimited individual users"
            text3="Unlimited individual data"
            text4="Personalised+priotity service"
            propMargin="0"
            propMargin1="unset"
            propMargin2="unset"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
