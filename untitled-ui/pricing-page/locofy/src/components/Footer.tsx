import { FunctionComponent } from "react";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-white flex flex-col items-start justify-start pt-16 px-20 pb-12 gap-[64px] text-left text-sm text-gray-500 font-text-md-regular mq750:gap-[32px] mq750:pt-[42px] mq750:px-10 mq750:pb-[31px] mq750:box-border mq450:gap-[16px] ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start py-0 px-8 mq750:gap-[24px]">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[32px] mq750:gap-[16px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[172px] max-w-[176px]">
            <b className="self-stretch relative leading-[20px] font-semibold">
              Product
            </b>
            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[53px] pl-0 gap-[12px] text-base text-gray-600">
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center justify-center">
                    <b className="relative leading-[24px] font-semibold inline-block min-w-[74px]">
                      Overview
                    </b>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center justify-center">
                    <b className="relative leading-[24px] font-semibold inline-block min-w-[68px]">
                      Features
                    </b>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[8px]">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center justify-center">
                    <b className="relative leading-[24px] font-semibold inline-block min-w-[73px]">
                      Solutions
                    </b>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start mix-blend-multiply text-center text-xs text-success-700">
                  <div className="rounded-2xl bg-success-50 flex flex-row items-center justify-center py-0.5 px-2">
                    <div className="relative leading-[18px] font-medium inline-block min-w-[26px]">
                      New
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center justify-center">
                    <a className="[text-decoration:none] relative leading-[24px] font-semibold text-[inherit] inline-block min-w-[68px]">
                      Tutorials
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center justify-center">
                    <b className="relative leading-[24px] font-semibold inline-block min-w-[54px]">
                      Pricing
                    </b>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center justify-center">
                    <b className="relative leading-[24px] font-semibold inline-block min-w-[70px]">
                      Releases
                    </b>
                  </div>
                </div>
              </div>
              <div className="w-[88px] hidden flex-row items-center justify-start py-0 pr-[9px] pl-0 box-border">
                <div className="h-6 flex-1 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                    <div className="self-stretch flex-1 relative leading-[24px] font-semibold">
                      Additional
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[88px] hidden flex-row items-center justify-start py-0 pr-[9px] pl-0 box-border">
                <div className="h-6 flex-1 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                    <div className="self-stretch flex-1 relative leading-[24px] font-semibold">
                      Additional
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[88px] hidden flex-row items-center justify-start py-0 pr-[9px] pl-0 box-border">
                <div className="h-6 flex-1 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                    <div className="self-stretch flex-1 relative leading-[24px] font-semibold">
                      Additional
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[88px] hidden flex-row items-center justify-start py-0 pr-[9px] pl-0 box-border">
                <div className="h-6 flex-1 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                    <div className="self-stretch flex-1 relative leading-[24px] font-semibold">
                      Additional
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[88px] hidden flex-row items-center justify-start py-0 pr-[9px] pl-0 box-border">
                <div className="h-6 flex-1 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                    <div className="self-stretch flex-1 relative leading-[24px] font-semibold">
                      Additional
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[172px] max-w-[176px]">
            <a className="[text-decoration:none] self-stretch relative leading-[20px] font-semibold text-[inherit]">
              Company
            </a>
            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[105px] pl-0 gap-[12px] text-base text-gray-600">
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center justify-center">
                    <b className="relative leading-[24px] font-semibold inline-block min-w-[70px]">
                      About us
                    </b>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center justify-center">
                    <b className="relative leading-[24px] font-semibold inline-block min-w-[62px]">
                      Careers
                    </b>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center justify-center">
                    <b className="relative leading-[24px] font-semibold inline-block min-w-[44px]">
                      Press
                    </b>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center justify-center">
                    <b className="relative leading-[24px] font-semibold inline-block min-w-[44px]">
                      News
                    </b>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center justify-center">
                    <b className="relative leading-[24px] font-semibold inline-block min-w-[71px]">
                      Media kit
                    </b>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center justify-center">
                    <b className="relative leading-[24px] font-semibold inline-block min-w-[62px]">
                      Contact
                    </b>
                  </div>
                </div>
              </div>
              <div className="w-[88px] hidden flex-row items-center justify-start py-0 pr-[9px] pl-0 box-border">
                <div className="h-6 flex-1 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                    <div className="self-stretch flex-1 relative leading-[24px] font-semibold">
                      Additional
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[88px] hidden flex-row items-center justify-start py-0 pr-[9px] pl-0 box-border">
                <div className="h-6 flex-1 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                    <div className="self-stretch flex-1 relative leading-[24px] font-semibold">
                      Additional
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[88px] hidden flex-row items-center justify-start py-0 pr-[9px] pl-0 box-border">
                <div className="h-6 flex-1 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                    <div className="self-stretch flex-1 relative leading-[24px] font-semibold">
                      Additional
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[88px] hidden flex-row items-center justify-start py-0 pr-[9px] pl-0 box-border">
                <div className="h-6 flex-1 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                    <div className="self-stretch flex-1 relative leading-[24px] font-semibold">
                      Additional
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[88px] hidden flex-row items-center justify-start py-0 pr-[9px] pl-0 box-border">
                <div className="h-6 flex-1 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                    <div className="self-stretch flex-1 relative leading-[24px] font-semibold">
                      Additional
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[172px] max-w-[176px]">
            <b className="self-stretch relative leading-[20px] font-semibold">
              Resources
            </b>
            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[86px] pl-0 gap-[12px] text-base text-gray-600">
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center justify-center">
                    <b className="relative leading-[24px] font-semibold inline-block min-w-[35px]">
                      Blog
                    </b>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center justify-center">
                    <b className="relative leading-[24px] font-semibold inline-block min-w-[86px]">
                      Newsletter
                    </b>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center justify-center">
                    <b className="relative leading-[24px] font-semibold inline-block min-w-[53px]">
                      Events
                    </b>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center justify-center">
                    <b className="relative leading-[24px] font-semibold inline-block min-w-[90px]">
                      Help centre
                    </b>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center justify-center">
                    <a className="[text-decoration:none] relative leading-[24px] font-semibold text-[inherit] inline-block min-w-[68px]">
                      Tutorials
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center justify-center">
                    <b className="relative leading-[24px] font-semibold inline-block min-w-[63px]">
                      Support
                    </b>
                  </div>
                </div>
              </div>
              <div className="w-[88px] hidden flex-row items-center justify-start py-0 pr-[9px] pl-0 box-border">
                <div className="h-6 flex-1 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                    <div className="self-stretch flex-1 relative leading-[24px] font-semibold">
                      Additional
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[88px] hidden flex-row items-center justify-start py-0 pr-[9px] pl-0 box-border">
                <div className="h-6 flex-1 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                    <div className="self-stretch flex-1 relative leading-[24px] font-semibold">
                      Additional
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[88px] hidden flex-row items-center justify-start py-0 pr-[9px] pl-0 box-border">
                <div className="h-6 flex-1 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                    <div className="self-stretch flex-1 relative leading-[24px] font-semibold">
                      Additional
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[88px] hidden flex-row items-center justify-start py-0 pr-[9px] pl-0 box-border">
                <div className="h-6 flex-1 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                    <div className="self-stretch flex-1 relative leading-[24px] font-semibold">
                      Additional
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[88px] hidden flex-row items-center justify-start py-0 pr-[9px] pl-0 box-border">
                <div className="h-6 flex-1 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                    <div className="self-stretch flex-1 relative leading-[24px] font-semibold">
                      Additional
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[172px] max-w-[176px]">
            <b className="self-stretch relative leading-[20px] font-semibold">
              Use cases
            </b>
            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[70px] pl-0 gap-[12px] text-base text-gray-600">
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center justify-center">
                    <b className="relative leading-[24px] font-semibold inline-block min-w-[68px]">
                      Startups
                    </b>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center justify-center">
                    <b className="relative leading-[24px] font-semibold inline-block min-w-[81px]">
                      Enterprise
                    </b>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center justify-center">
                    <b className="relative leading-[24px] font-semibold inline-block min-w-[96px]">
                      Government
                    </b>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center justify-center">
                    <b className="relative leading-[24px] font-semibold inline-block min-w-[40px]">
                      SaaS
                    </b>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center justify-center">
                    <b className="relative leading-[24px] font-semibold inline-block min-w-[106px]">
                      Marketplaces
                    </b>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center justify-center">
                    <b className="relative leading-[24px] font-semibold inline-block min-w-[92px]">
                      Ecommerce
                    </b>
                  </div>
                </div>
              </div>
              <div className="w-[88px] hidden flex-row items-center justify-start py-0 pr-[9px] pl-0 box-border">
                <div className="h-6 flex-1 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                    <div className="self-stretch flex-1 relative leading-[24px] font-semibold">
                      Additional
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[88px] hidden flex-row items-center justify-start py-0 pr-[9px] pl-0 box-border">
                <div className="h-6 flex-1 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                    <div className="self-stretch flex-1 relative leading-[24px] font-semibold">
                      Additional
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[88px] hidden flex-row items-center justify-start py-0 pr-[9px] pl-0 box-border">
                <div className="h-6 flex-1 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                    <div className="self-stretch flex-1 relative leading-[24px] font-semibold">
                      Additional
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[88px] hidden flex-row items-center justify-start py-0 pr-[9px] pl-0 box-border">
                <div className="h-6 flex-1 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                    <div className="self-stretch flex-1 relative leading-[24px] font-semibold">
                      Additional
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[88px] hidden flex-row items-center justify-start py-0 pr-[9px] pl-0 box-border">
                <div className="h-6 flex-1 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                    <div className="self-stretch flex-1 relative leading-[24px] font-semibold">
                      Additional
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[172px] max-w-[176px]">
            <b className="self-stretch relative leading-[20px] font-semibold">
              Social
            </b>
            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[100px] pl-0 gap-[12px] text-base text-gray-600">
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center justify-center">
                    <b className="relative leading-[24px] font-semibold inline-block min-w-[56px]">
                      Twitter
                    </b>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center justify-center">
                    <b className="relative leading-[24px] font-semibold inline-block min-w-[66px]">
                      LinkedIn
                    </b>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center justify-center">
                    <b className="relative leading-[24px] font-semibold inline-block min-w-[76px]">
                      Facebook
                    </b>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center justify-center">
                    <b className="relative leading-[24px] font-semibold inline-block min-w-[55px]">
                      GitHub
                    </b>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center justify-center">
                    <b className="relative leading-[24px] font-semibold inline-block min-w-[74px]">
                      AngelList
                    </b>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center justify-center">
                    <b className="relative leading-[24px] font-semibold inline-block min-w-[67px]">
                      Dribbble
                    </b>
                  </div>
                </div>
              </div>
              <div className="w-[88px] hidden flex-row items-center justify-start py-0 pr-[9px] pl-0 box-border">
                <div className="h-6 flex-1 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                    <div className="self-stretch flex-1 relative leading-[24px] font-semibold">
                      Additional
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[88px] hidden flex-row items-center justify-start py-0 pr-[9px] pl-0 box-border">
                <div className="h-6 flex-1 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                    <div className="self-stretch flex-1 relative leading-[24px] font-semibold">
                      Additional
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[88px] hidden flex-row items-center justify-start py-0 pr-[9px] pl-0 box-border">
                <div className="h-6 flex-1 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                    <div className="self-stretch flex-1 relative leading-[24px] font-semibold">
                      Additional
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[88px] hidden flex-row items-center justify-start py-0 pr-[9px] pl-0 box-border">
                <div className="h-6 flex-1 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                    <div className="self-stretch flex-1 relative leading-[24px] font-semibold">
                      Additional
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[88px] hidden flex-row items-center justify-start py-0 pr-[9px] pl-0 box-border">
                <div className="h-6 flex-1 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                    <div className="self-stretch flex-1 relative leading-[24px] font-semibold">
                      Additional
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[172px] max-w-[176px]">
            <b className="self-stretch relative leading-[20px] font-semibold">
              Legal
            </b>
            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[107px] pl-0 gap-[12px] text-base text-gray-600">
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center justify-center">
                    <b className="relative leading-[24px] font-semibold inline-block min-w-[49px]">
                      Terms
                    </b>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center justify-center">
                    <b className="relative leading-[24px] font-semibold inline-block min-w-[58px]">
                      Privacy
                    </b>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center justify-center">
                    <b className="relative leading-[24px] font-semibold inline-block min-w-[63px]">
                      Cookies
                    </b>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center justify-center">
                    <b className="relative leading-[24px] font-semibold inline-block min-w-[69px]">
                      Licenses
                    </b>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center justify-center">
                    <b className="relative leading-[24px] font-semibold inline-block min-w-[65px]">
                      Settings
                    </b>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center justify-center">
                    <b className="relative leading-[24px] font-semibold inline-block min-w-[62px]">
                      Contact
                    </b>
                  </div>
                </div>
              </div>
              <div className="w-[88px] hidden flex-row items-center justify-start py-0 pr-[9px] pl-0 box-border">
                <div className="h-6 flex-1 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                    <div className="self-stretch flex-1 relative leading-[24px] font-semibold">
                      Additional
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[88px] hidden flex-row items-center justify-start py-0 pr-[9px] pl-0 box-border">
                <div className="h-6 flex-1 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                    <div className="self-stretch flex-1 relative leading-[24px] font-semibold">
                      Additional
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[88px] hidden flex-row items-center justify-start py-0 pr-[9px] pl-0 box-border">
                <div className="h-6 flex-1 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                    <div className="self-stretch flex-1 relative leading-[24px] font-semibold">
                      Additional
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[88px] hidden flex-row items-center justify-start py-0 pr-[9px] pl-0 box-border">
                <div className="h-6 flex-1 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                    <div className="self-stretch flex-1 relative leading-[24px] font-semibold">
                      Additional
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[88px] hidden flex-row items-center justify-start py-0 pr-[9px] pl-0 box-border">
                <div className="h-6 flex-1 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                    <div className="self-stretch flex-1 relative leading-[24px] font-semibold">
                      Additional
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-0 px-8 gap-[32px] text-base mq750:gap-[16px]">
        <div className="self-stretch h-px relative bg-gray-200" />
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq750:flex-wrap">
          <div className="flex flex-row items-start justify-start">
            <div className="flex flex-row items-start justify-start gap-[10px]">
              <div className="shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)] flex flex-row items-start justify-start">
                <img
                  className="h-8 w-8 relative rounded-lg overflow-hidden shrink-0"
                  alt=""
                  src="/content.svg"
                />
              </div>
              <img
                className="self-stretch w-[100px] relative max-h-full min-h-[32px]"
                alt=""
                src="/logotype.svg"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
            <div className="relative leading-[24px]">
              © 2077 Untitled UI. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
