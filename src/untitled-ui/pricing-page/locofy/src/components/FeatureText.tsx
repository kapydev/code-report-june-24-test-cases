import { FunctionComponent } from "react";

export type FeatureTextType = {
  className?: string;
  featuredIcon?: string;
  featureTitle?: string;
  supportingText?: string;
};

const FeatureText: FunctionComponent<FeatureTextType> = ({
  className = "",
  featuredIcon,
  featureTitle,
  supportingText,
}) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[365px] max-w-full text-left text-xl text-gray-900 font-text-md-regular ${className}`}
    >
      <img
        className="w-12 h-12 relative rounded-3xl"
        loading="lazy"
        alt=""
        src={featuredIcon}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
        <div className="self-stretch relative leading-[30px] font-semibold mq450:text-base mq450:leading-[24px]">
          {featureTitle}
        </div>
        <p className="m-0 self-stretch relative text-base leading-[24px] text-gray-600">
          {supportingText}
        </p>
      </div>
      <div className="flex flex-row items-start justify-start text-base text-brand-700">
        <div className="flex flex-row items-center justify-center gap-[8px]">
          <a className="[text-decoration:none] relative leading-[24px] font-semibold text-[inherit] inline-block min-w-[88px] whitespace-nowrap">
            Learn more
          </a>
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/arrowright.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureText;
