import { FunctionComponent } from "react";
import InputField from "./InputField";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[360px] flex flex-col items-start justify-start gap-[32px] max-w-full text-center text-11xl text-gray-900 font-text-sm-semibold mq450:gap-[16px] ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <div className="shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)] flex flex-row items-start justify-start">
            <img
              className="h-12 w-12 relative rounded-xl overflow-hidden shrink-0"
              alt=""
              src="/content-1.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <h2 className="m-0 self-stretch relative text-inherit leading-[38px] font-semibold font-inherit mq450:text-lg mq450:leading-[23px] mq750:text-5xl mq750:leading-[30px]">
            Log in to your account
          </h2>
          <div className="self-stretch relative text-base leading-[24px] text-gray-600">
            Welcome back! Please enter your details.
          </div>
        </div>
      </div>
      <form className="m-0 self-stretch rounded-xl flex flex-col items-start justify-start gap-[24px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
          <InputField label="Email" contentPlaceholder="Enter your email" />
          <InputField
            label="Password"
            contentPlaceholder="••••••••"
            propMinWidth="66px"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <input className="m-0 h-[18px] w-4" type="checkbox" />
            <div className="relative text-sm leading-[20px] font-medium font-text-sm-semibold text-gray-700 text-left">
              Remember for 30 days
            </div>
          </div>
          <div className="flex flex-row items-start justify-start">
            <div className="flex flex-row items-start justify-start">
              <b className="relative text-sm leading-[20px] font-semibold font-text-sm-semibold text-brand-700 text-left inline-block min-w-[114px]">
                Forgot password
              </b>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch rounded-lg flex flex-row items-start justify-start max-w-full">
            <div className="flex-1 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-brand-600 box-border overflow-hidden flex flex-row items-center justify-center py-2 px-5 whitespace-nowrap max-w-full border-[1px] border-solid border-brand-600">
              <b className="relative text-base leading-[24px] font-semibold font-text-sm-semibold text-white text-left inline-block min-w-[53px]">
                Sign in
              </b>
            </div>
          </button>
          <div className="self-stretch flex flex-col items-center justify-center gap-[12px]">
            <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-white overflow-hidden flex flex-row items-center justify-center py-2 px-5 gap-[12px] whitespace-nowrap border-[1px] border-solid border-gray-300">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/social-icon.svg"
              />
              <div className="relative text-base leading-[24px] font-semibold font-text-sm-semibold text-gray-700 text-left">
                Sign in with Google
              </div>
            </div>
            <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-white overflow-hidden hidden flex-row items-center justify-center py-2 px-4 gap-[12px] whitespace-nowrap border-[1px] border-solid border-gray-300">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/social-icon-1.svg"
              />
              <div className="relative text-base leading-[24px] font-semibold font-text-sm-semibold text-gray-700 text-left">
                Sign in with Facebook
              </div>
            </div>
            <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-white overflow-hidden hidden flex-row items-center justify-center py-2 px-4 gap-[12px] whitespace-nowrap border-[1px] border-solid border-gray-300">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/social-icon-2.svg"
              />
              <div className="relative text-base leading-[24px] font-semibold font-text-sm-semibold text-gray-700 text-left">
                Sign in with Apple
              </div>
            </div>
            <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-white overflow-hidden hidden flex-row items-center justify-center py-2 px-4 gap-[12px] whitespace-nowrap border-[1px] border-solid border-gray-300">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/social-icon-3.svg"
              />
              <div className="relative text-base leading-[24px] font-semibold font-text-sm-semibold text-gray-700 text-left">
                Sign in with Twitter
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="flex flex-row items-start justify-center py-0 px-[75px] gap-[4px] text-left text-sm text-gray-600 mq450:flex-wrap mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="relative leading-[20px]">Don’t have an account?</div>
        <div className="flex flex-row items-start justify-start text-brand-700">
          <div className="flex flex-row items-center justify-center">
            <b className="relative leading-[20px] font-semibold inline-block min-w-[51px] whitespace-nowrap">
              Sign up
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
