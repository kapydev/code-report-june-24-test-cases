import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type PricingTierCardType = {
  className?: string;
  price?: string;
  heading?: string;
  text?: string;
  text1?: string;
  text2?: string;
  text3?: string;
  text4?: string;

  /** Style props */
  propMargin?: CSSProperties["margin"];
  propMargin1?: CSSProperties["margin"];
  propMargin2?: CSSProperties["margin"];
};

const PricingTierCard: FunctionComponent<PricingTierCardType> = ({
  className = "",
  price,
  heading,
  text,
  text1,
  text2,
  text3,
  text4,
  propMargin,
  propMargin1,
  propMargin2,
}) => {
  const textStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  const text1Style: CSSProperties = useMemo(() => {
    return {
      margin: propMargin1,
    };
  }, [propMargin1]);

  const text2Style: CSSProperties = useMemo(() => {
    return {
      margin: propMargin2,
    };
  }, [propMargin2]);

  return (
    <div
      className={`flex-1 shadow-[0px_12px_16px_-4px_rgba(16,_24,_40,_0.08),_0px_4px_6px_-2px_rgba(16,_24,_40,_0.03)] rounded-2xl bg-white box-border flex flex-col items-start justify-start pt-[38px] px-0 pb-0 min-w-[288px] max-w-full text-left text-sm text-brand-700 font-text-md-regular border-[1px] border-solid border-gray-200 ${className}`}
    >
      <img
        className="w-[68.7px] h-[57px] relative object-contain hidden"
        alt=""
        src="/handdrawn-arrow@2x.png"
      />
      <div className="w-[93px] relative leading-[20px] font-medium hidden">
        Most popular!
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-8 text-center text-29xl text-gray-900">
        <div className="flex-1 flex flex-col items-end justify-start gap-[16px]">
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[61px] pl-[62px] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="w-[197px] relative tracking-[-0.02em] leading-[60px] font-semibold inline-block mq750:text-19xl mq750:leading-[48px] mq450:text-10xl mq450:leading-[36px]">
              {price}
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-xl">
            <b className="self-stretch relative leading-[30px] font-semibold mq450:text-base mq450:leading-[24px]">
              {heading}
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
              alt=""
              src="/check-icon.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start min-w-[185px]">
              <div className="self-stretch relative leading-[24px]">{text}</div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[12px] mq450:flex-wrap">
            <img
              className="h-6 w-6 relative rounded-xl overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/check-icon.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start min-w-[185px]">
              <div
                className="self-stretch relative leading-[24px]"
                style={textStyle}
              >
                {text1}
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
                {text2}
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
              <p
                className="m-0 self-stretch relative leading-[24px]"
                style={text1Style}
              >
                {text3}
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
              <p
                className="m-0 self-stretch relative leading-[24px]"
                style={text2Style}
              >
                {text4}
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
  );
};

export default PricingTierCard;
