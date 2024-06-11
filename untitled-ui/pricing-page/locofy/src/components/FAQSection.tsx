import { FunctionComponent } from "react";

export type FAQSectionType = {
  className?: string;
};

const FAQSection: FunctionComponent<FAQSectionType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-white overflow-hidden flex flex-col items-center justify-start py-24 px-20 box-border gap-[64px] max-w-full text-left text-17xl text-gray-900 font-text-md-regular mq750:gap-[32px] mq750:pl-10 mq750:pr-10 mq750:box-border mq450:gap-[16px] mq450:pt-10 mq450:pb-10 mq450:box-border mq1050:pt-[62px] mq1050:pb-[62px] mq1050:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start py-0 px-8 box-border max-w-full mq750:gap-[16px]">
        <div className="self-stretch flex flex-col items-start justify-start max-w-full mq450:gap-[24px]">
          <div className="w-[768px] flex flex-col items-start justify-start gap-[20px] max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[44px] font-semibold font-inherit mq750:text-10xl mq750:leading-[35px] mq450:text-3xl mq450:leading-[26px]">
              FAQs
            </h1>
            <p className="m-0 self-stretch relative text-xl leading-[30px] text-gray-600 mq450:text-base mq450:leading-[24px]">
              {`Everything you need to know about the product and billing. Can’t find the answer you’re looking for? Please `}
              <span className="[text-decoration:underline]">
                chat to our friendly team
              </span>
              .
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start py-0 px-8 box-border gap-[64px] max-w-full text-lg mq750:gap-[32px] mq450:gap-[16px]">
        <div className="w-[1216px] overflow-x-auto flex flex-row items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
          <div className="flex-1 flex flex-col items-center justify-start max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px] max-w-full">
                <p className="m-0 self-stretch relative leading-[28px] font-semibold">
                  Is there a free trial available?
                </p>
                <p className="m-0 self-stretch relative text-base leading-[24px] text-gray-600">
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-start max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px] max-w-full">
                <div className="self-stretch relative leading-[28px] font-semibold">
                  Can I change my plan later?
                </div>
                <p className="m-0 self-stretch relative text-base leading-[24px] text-gray-600">
                  Of course. Our pricing scales with your company. Chat to our
                  friendly team to find a solution that works for you.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-start max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px] max-w-full">
                <p className="m-0 self-stretch relative leading-[28px] font-semibold">
                  What is your cancellation policy?
                </p>
                <p className="m-0 self-stretch relative text-base leading-[24px] text-gray-600">
                  We understand that things change. You can cancel your plan at
                  any time and we’ll refund you the difference already paid.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1216px] overflow-x-auto flex flex-row items-start justify-start gap-[32px] max-w-full text-xl mq750:gap-[16px]">
          <div className="flex-1 flex flex-col items-center justify-start max-w-full text-lg">
            <div className="self-stretch flex flex-row items-start justify-start max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px] max-w-full">
                <div className="self-stretch relative leading-[28px] font-semibold">
                  Can other info be added to an invoice?
                </div>
                <p className="m-0 self-stretch relative text-base leading-[24px] text-gray-600">
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-start max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px] max-w-full">
                <div className="self-stretch relative leading-[30px] font-medium mq450:text-base mq450:leading-[24px]">
                  How does billing work?
                </div>
                <p className="m-0 self-stretch relative text-base leading-[24px] text-gray-600">
                  Plans are per workspace, not per account. You can upgrade one
                  workspace, and still have any number of free workspaces.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-start max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px] max-w-full">
                <div className="self-stretch relative leading-[30px] font-medium mq450:text-base mq450:leading-[24px]">
                  How do I change my account email?
                </div>
                <p className="m-0 self-stretch relative text-base leading-[24px] text-gray-600">
                  You can change the email address associated with your account
                  by going to untitled.com/account from a laptop or desktop.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-0 px-8 box-border max-w-full text-xl mq750:gap-[16px]">
        <div className="self-stretch rounded-2xl bg-gray-50 flex flex-row items-start justify-between p-8 box-border max-w-full gap-[20px] lg:flex-wrap">
          <div className="w-[768px] flex flex-col items-start justify-start gap-[8px] max-w-full">
            <div className="self-stretch relative leading-[30px] font-medium mq450:text-base mq450:leading-[24px]">
              Still have questions?
            </div>
            <p className="m-0 self-stretch relative text-lg leading-[28px] text-gray-600">
              Can’t find the answer you’re looking for? Please chat to our
              friendly team.
            </p>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[130px] flex flex-row items-start justify-start">
            <div className="flex-1 rounded-lg flex flex-row items-start justify-start">
              <div className="flex-1 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-brand-600 overflow-hidden flex flex-row items-center justify-center py-2 px-4 whitespace-nowrap border-[1px] border-solid border-brand-600">
                <div className="relative text-base leading-[24px] font-semibold font-text-md-regular text-white text-left inline-block min-w-[95px]">
                  Get in touch
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
