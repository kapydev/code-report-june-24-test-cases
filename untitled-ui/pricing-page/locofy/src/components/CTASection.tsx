import { FunctionComponent } from "react";

export type CTASectionType = {
  className?: string;
};

const CTASection: FunctionComponent<CTASectionType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-brand-800 overflow-hidden flex flex-row flex-wrap items-start justify-start py-24 px-28 box-border gap-[179px] max-w-full text-left text-17xl text-white font-text-md-regular mq750:gap-[89px] mq750:pl-14 mq750:pr-14 mq750:box-border mq450:gap-[45px] mq450:py-[62px] mq450:px-5 mq450:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[40px] min-w-[499px] max-w-full mq750:min-w-full mq450:gap-[20px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[44px] font-semibold font-inherit mq750:text-10xl mq750:leading-[35px] mq450:text-3xl mq450:leading-[26px]">
            Start your 30-day free trial
          </h1>
          <p className="m-0 self-stretch relative text-xl leading-[30px] text-brand-200 mq450:text-base mq450:leading-[24px]">
            Join over 4,000+ startups already growing with Untitled.
          </p>
        </div>
        <div className="w-[421.4px] flex flex-col items-start justify-start gap-[16px] max-w-full">
          <div className="w-[393px] flex flex-row items-start justify-start gap-[32px] max-w-full mq450:flex-wrap mq450:gap-[16px]">
            <div className="w-[96.5px] flex flex-row items-end justify-start pt-[1.3px] px-0 pb-[1.4px] box-border gap-[9.3px]">
              <img
                className="h-[29.3px] w-[29.1px] relative"
                loading="lazy"
                alt=""
                src="/logomark.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[3.1px]">
                <img
                  className="self-stretch h-[17.8px] relative max-w-full overflow-hidden shrink-0"
                  alt=""
                  src="/logotype-1.svg"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-row items-end justify-start gap-[8.5px] min-w-[73px]">
              <img
                className="h-8 w-[19.2px] relative"
                alt=""
                src="/logomark-1.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[5.5px]">
                <img
                  className="self-stretch h-[18.2px] relative max-w-full overflow-hidden shrink-0"
                  alt=""
                  src="/logotype-2.svg"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-row items-end justify-start pt-[1.3px] px-0 pb-[1.4px] box-border gap-[8.9px] min-w-[79px]">
              <img
                className="h-[29.3px] w-[29.1px] relative"
                alt=""
                src="/logomark-2.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[7.8px]">
                <img
                  className="self-stretch h-[13.6px] relative max-w-full overflow-hidden shrink-0"
                  alt=""
                  src="/logotype-3.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[32px] mq450:flex-wrap mq450:gap-[16px]">
            <div className="w-[105.7px] flex flex-row items-end justify-start pt-[1.3px] px-0 pb-[1.4px] box-border gap-[8.9px]">
              <img
                className="h-[29.3px] w-[29.1px] relative"
                alt=""
                src="/logomark-3.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[3.9px]">
                <img
                  className="self-stretch h-[17.8px] relative max-w-full overflow-hidden shrink-0"
                  alt=""
                  src="/logotype-4.svg"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-row items-end justify-start pt-[1.3px] px-0 pb-[1.4px] box-border gap-[8.6px] min-w-[80px]">
              <img
                className="h-[29.3px] w-[29.1px] relative"
                alt=""
                src="/logomark-4.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[4.9px]">
                <img
                  className="self-stretch h-[17.7px] relative max-w-full overflow-hidden shrink-0"
                  alt=""
                  src="/logotype-5.svg"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-row items-end justify-start pt-[1.3px] px-0 pb-[1.4px] box-border gap-[9.2px] min-w-[83px]">
              <img
                className="h-[29.3px] w-[25.8px] relative"
                alt=""
                src="/logomark-5.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[2.8px]">
                <img
                  className="self-stretch h-[18.9px] relative max-w-full overflow-hidden shrink-0"
                  alt=""
                  src="/logotype-6.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[12px]">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] rounded-lg flex flex-row items-start justify-start">
          <div className="shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-white overflow-hidden flex flex-row items-center justify-center py-2.5 px-[19px] whitespace-nowrap border-[1px] border-solid border-gray-300">
            <a className="[text-decoration:none] relative text-base leading-[24px] font-semibold font-text-md-regular text-gray-700 text-left inline-block min-w-[88px]">
              Learn more
            </a>
          </div>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] rounded-lg flex flex-row items-start justify-start">
          <div className="shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-brand-600 overflow-hidden flex flex-row items-center justify-center py-2.5 px-[19px] whitespace-nowrap border-[1px] border-solid border-brand-600">
            <b className="relative text-base leading-[24px] font-semibold font-text-md-regular text-white text-left inline-block min-w-[89px]">
              Get started
            </b>
          </div>
        </button>
      </div>
    </section>
  );
};

export default CTASection;
