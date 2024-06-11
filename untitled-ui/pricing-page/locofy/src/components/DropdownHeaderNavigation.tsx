import { FunctionComponent } from "react";

export type DropdownHeaderNavigationType = {
  className?: string;
};

const DropdownHeaderNavigation: FunctionComponent<
  DropdownHeaderNavigationType
> = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch bg-white box-border flex flex-row items-start justify-start top-[0] z-[99] sticky max-w-full text-left text-base text-gray-600 font-text-md-regular border-b-[1px] border-solid border-gray-100 ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start py-[18px] px-20 box-border max-w-full mq750:pl-10 mq750:pr-10 mq750:box-border">
        <div className="flex-1 flex flex-row items-start justify-between py-0 px-8 box-border max-w-full gap-[20px]">
          <div className="w-[586px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[40px] max-w-full mq750:gap-[20px]">
              <div className="flex flex-row items-start justify-start">
                <div className="flex flex-row items-start justify-start gap-[10px]">
                  <div className="shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)] flex flex-row items-start justify-start">
                    <img
                      className="h-8 w-8 relative rounded-lg overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/content.svg"
                    />
                  </div>
                  <img
                    className="self-stretch w-[100px] relative max-h-full min-h-[32px]"
                    loading="lazy"
                    alt=""
                    src="/logotype.svg"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-row items-center justify-between max-w-full gap-[20px]">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center justify-center">
                    <a className="[text-decoration:none] relative leading-[24px] font-semibold text-[inherit] inline-block min-w-[46px]">
                      Home
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start py-1 px-0">
                  <div className="flex flex-row items-start justify-start">
                    <div className="flex flex-row items-center justify-center gap-[8px]">
                      <a className="[text-decoration:none] relative leading-[24px] font-semibold text-[inherit] inline-block min-w-[70px]">
                        Products
                      </a>
                      <img
                        className="h-5 w-5 relative overflow-hidden shrink-0"
                        alt=""
                        src="/chevrondown.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start py-1 px-0">
                  <div className="flex flex-row items-start justify-start">
                    <div className="flex flex-row items-center justify-center gap-[8px]">
                      <a className="[text-decoration:none] relative leading-[24px] font-semibold text-[inherit] inline-block min-w-[82px]">
                        Resources
                      </a>
                      <img
                        className="h-5 w-5 relative overflow-hidden shrink-0"
                        alt=""
                        src="/chevrondown.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center justify-center">
                    <a className="[text-decoration:none] relative leading-[24px] font-semibold text-[inherit] inline-block min-w-[54px]">
                      Pricing
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[190px] flex flex-row items-center justify-start gap-[12px] text-gray-700">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] rounded-lg flex flex-row items-start justify-start">
              <div className="rounded-lg overflow-hidden flex flex-row items-center justify-center py-2.5 px-[18px]">
                <a className="[text-decoration:none] relative text-base leading-[24px] font-semibold font-text-md-regular text-gray-600 text-left inline-block min-w-[47px] whitespace-nowrap">
                  Log in
                </a>
              </div>
            </button>
            <div className="rounded-lg hidden flex-row items-start justify-start">
              <div className="shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-white overflow-hidden flex flex-row items-center justify-center py-2 px-[17px] whitespace-nowrap border-[1px] border-solid border-gray-300">
                <div className="relative leading-[24px] font-semibold">
                  Book demo
                </div>
              </div>
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex-1 rounded-lg flex flex-row items-start justify-start">
              <div className="flex-1 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-brand-600 overflow-hidden flex flex-row items-center justify-center py-2 px-[17px] whitespace-nowrap border-[1px] border-solid border-brand-600">
                <a className="[text-decoration:none] relative text-base leading-[24px] font-semibold font-text-md-regular text-white text-left inline-block min-w-[59px]">
                  Sign up
                </a>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DropdownHeaderNavigation;
