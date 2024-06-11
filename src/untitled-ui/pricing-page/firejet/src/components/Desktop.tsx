import Dot from "./assets/Dot";
import Logotype from "./assets/Logotype";
import ChevronDown from "./assets/ChevronDown";
import LoginSignupButtons from "./LoginSignupButtons";
import PricingCard from "./PricingCard";
import FeatureList from "./FeatureList";
import CheckIconRound from "./assets/CheckIconRound";
import FeatureCard from "./FeatureCard";
import Zap from "./assets/Zap";
import LearnMoreButton from "./LearnMoreButton";
import BarChart2 from "./assets/BarChart2";
import ArrowRight1 from "./assets/ArrowRight1";
import Smile from "./assets/Smile";
import LearnMoreButtonAlt from "./LearnMoreButtonAlt";
import Command from "./assets/Command";
import MessageCircle from "./assets/MessageCircle";
import ArrowRight3 from "./assets/ArrowRight3";
import FAQSection from "./FAQSection";
import Logomark from "./assets/Logomark";
import Logotype1 from "./assets/Logotype1";
import Logomark1 from "./assets/Logomark1";
import Logotype2 from "./assets/Logotype2";
import Logomark2 from "./assets/Logomark2";
import Logotype3 from "./assets/Logotype3";
import Logomark3 from "./assets/Logomark3";
import Logotype4 from "./assets/Logotype4";
import Logomark4 from "./assets/Logomark4";
import Logotype5 from "./assets/Logotype5";
import Logomark5 from "./assets/Logomark5";
import Logotype6 from "./assets/Logotype6";
import Dot1 from "./assets/Dot1";
import Logotype7 from "./assets/Logotype7";

export default function Desktop({ className = "" }: DesktopProps) {
  return (
    <div
      className={`font-inter w-full bg-white pb-12 tracking-[0px] text-[#475467] ${className}`}
    >
      <nav className="flex flex-wrap items-center justify-center gap-x-[458px] gap-y-4 border-b border-solid border-[#F2F4F7] px-28 pb-[17px] pt-[18px] font-semibold leading-6 min-[1430px]:flex-nowrap" >
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 min-[1430px]:flex-nowrap" >
          <div className="flex items-center justify-center gap-x-2 self-stretch" >
            <div className="z-0 flex h-8 w-8 flex-shrink-0 rounded-lg">
              <div className="relative flex h-full w-full flex-shrink-0 flex-col items-center justify-end overflow-clip rounded-lg border-[0.3px] border-solid border-[#D0D5DD] [background-image:linear-gradient(180deg,_white,_#D0D5DD)]" >
                <div className="bg-bg-grid absolute inset-0 z-0 bg-cover bg-center" />
                <Dot className="z-[1] h-4 w-4 flex-shrink-0" />
                <div className="z-[2] flex h-2 flex-shrink-0 flex-col self-stretch" >
                  <div className="-mt-2 h-4 flex-shrink-0 rounded-b-lg bg-white/20 backdrop-blur-[2.5px]" />
                </div>
              </div>
            </div>
            <div className="flex flex-grow items-center justify-center gap-x-8 self-stretch pl-0.5" >
              <Logotype className="h-8 w-24 flex-shrink-0" />
              <div className="pl-2">Home</div>
              <div>Products</div>
            </div>
            <ChevronDown className="h-5 w-5 flex-shrink-0" />
          </div>
          <div className="flex items-center justify-center gap-x-2">
            <div>Resources</div>
            <ChevronDown className="h-5 w-5 flex-shrink-0" />
          </div>
          <div>Pricing</div>
        </div>
        <LoginSignupButtons
          text="Log in"
          text1="Sign up"
          outerContainerClassName="gap-x-[30px]"
          buttonContainerClassName="rounded-lg border border-solid px-[17px] py-[9px] drop-shadow-lg bg-[#7F56D9] border-[#7F56D9]"
          buttonTextClassName="text-white"
         />
      </nav>
      <section className="relative flex flex-col justify-center gap-y-3 py-24 pl-28 pr-[560px]" >
        <div className="font-semibold leading-6 text-[#7F56D9]">
          Pricing
        </div>
        <div className="text-5xl font-semibold leading-[60px] tracking-[-0.32px] text-[#101828]" >
          Simple, transparent pricing
        </div>
        <div className="w-[768px] pt-3 text-xl leading-[30px]">
          We believe Untitled should be accessible to all companies, no matter the size.
        </div>
        <div className="absolute bottom-2.5 left-[calc(50%_+_-10px_+_-238.5px)] h-5 w-24 flex-shrink-0 text-center text-sm font-medium leading-5 text-[#6941C6]" >
          Most popular!
        </div>
      </section>
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-8 px-28 pb-24 leading-6 min-[1430px]:flex-nowrap" >
        <PricingCard className="relative w-96" />
        <div className="flex w-96 flex-shrink-0 flex-col justify-center gap-y-1 rounded-2xl border border-solid border-[#E4E7EC] px-8 pb-8 pt-10 [box-shadow:_0px_12px_16px_-4px_rgba(16,_24,_40,_0.08),_0px_4px_6px_-2px_rgba(16,_24,_40,_0.03)]" >
          <div className="text-center text-5xl font-semibold leading-[60px] tracking-[-0.32px] text-[#101828]" >
            $20/mth
          </div>
          <div className="pt-3 text-center text-xl font-semibold leading-[30px] text-[#101828]" >
            Business plan
          </div>
          <div className="text-center">Billed annually.</div>
          <FeatureList
            text="200+ integrations"
            text1="Advanced reporting and analytics"
            text2="Up to 20 individual users"
            text3="40GB individual data each user"
            text4="Priority chat and email support"
           />
          <div className="flex flex-col justify-end pt-9">
            <button className="flex items-center justify-center rounded-lg border border-solid border-[#7F56D9] bg-[#7F56D9] p-[11px] drop-shadow-lg" >
              <div className="flex-grow text-center font-semibold text-white">
                Get started
              </div>
            </button>
          </div>
        </div>
        <div className="flex w-96 flex-shrink-0 flex-col justify-center gap-y-1 rounded-2xl border border-solid border-[#E4E7EC] px-8 pb-8 pt-10 [box-shadow:_0px_12px_16px_-4px_rgba(16,_24,_40,_0.08),_0px_4px_6px_-2px_rgba(16,_24,_40,_0.03)]" >
          <div className="text-center text-5xl font-semibold leading-[60px] tracking-[-0.32px] text-[#101828]" >
            $40/mth
          </div>
          <div className="pt-3 text-center text-xl font-semibold leading-[30px] text-[#101828]" >
            Enterprise plan
          </div>
          <div className="text-center">Billed annually.</div>
          <div className="flex flex-col gap-y-4 pt-7">
            <div className="flex items-center justify-center gap-x-3">
              <CheckIconRound className="h-6 w-6 flex-shrink-0 rounded-full" />
              <div className="w-72 flex-shrink-0 self-stretch">
                Advanced custom fields
              </div>
            </div>
            <div className="flex items-center justify-center gap-x-3">
              <CheckIconRound className="h-6 w-6 flex-shrink-0 rounded-full" />
              <div className="w-72 flex-shrink-0 self-stretch">
                Audit log and data history
              </div>
            </div>
            <div className="flex items-center justify-center gap-x-3">
              <CheckIconRound className="h-6 w-6 flex-shrink-0 rounded-full" />
              <div className="w-72 flex-shrink-0 self-stretch">
                Unlimited individual users
              </div>
            </div>
            <div className="flex items-center justify-center gap-x-3">
              <CheckIconRound className="h-6 w-6 flex-shrink-0 rounded-full" />
              <div className="w-72 flex-shrink-0 self-stretch">
                Unlimited individual data
              </div>
            </div>
            <div className="flex items-center justify-center gap-x-3">
              <CheckIconRound className="h-6 w-6 flex-shrink-0 rounded-full" />
              <div className="w-72 flex-shrink-0 self-stretch">
                Personalised+priotity service
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-end pt-9">
            <button className="flex items-center justify-center rounded-lg border border-solid border-[#7F56D9] bg-[#7F56D9] p-[11px] drop-shadow-lg" >
              <div className="flex-grow text-center font-semibold text-white">
                Get started
              </div>
            </button>
          </div>
        </div>
      </div>
      <section className="flex flex-col justify-center gap-y-3 bg-gray-50 px-28 py-24" >
        <div className="w-[768px] font-semibold leading-6 text-[#6941C6]">
          Features
        </div>
        <div className="w-[768px] text-4xl font-semibold leading-[44px] tracking-[-0.32px] text-[#101828]" >
          Beautiful analytics to grow smarter
        </div>
        <div className="flex items-end pr-[448px] pt-2 text-xl leading-[30px]" >
          <p>
            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-8 pt-[52px] leading-6 min-[1430px]:flex-nowrap" >
          <FeatureCard className="w-96" />
          <div className="flex w-96 flex-shrink-0 flex-col gap-y-2">
            <div className="flex h-12 w-12 flex-shrink-0 flex-col items-center justify-center rounded-full bg-[#F4EBFF] p-3" >
              <Zap className="h-6 w-6 flex-shrink-0" />
            </div>
            <div className="pt-3 text-xl font-semibold leading-[30px] text-[#101828]" >
              Deliver instant answers
            </div>
            <p>
              An all-in-one customer service platform that helps you balance everything your customers need to be happy.
            </p>
            <LearnMoreButton buttonText="Learn more" />
          </div>
          <div className="flex w-96 flex-shrink-0 flex-col gap-y-2">
            <div className="flex h-12 w-12 flex-shrink-0 flex-col items-center justify-center rounded-full bg-[#F4EBFF] p-3" >
              <BarChart2 className="h-6 w-6 flex-shrink-0" />
            </div>
            <div className="pt-3 text-xl font-semibold leading-[30px] text-[#101828]" >
              Manage your team with reports
            </div>
            <p>
              Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
            </p>
            <div className="flex items-end pt-3">
              <div className="flex items-center justify-center gap-x-2">
                <div className="font-semibold text-[#6941C6]">
                  Learn more
                </div>
                <ArrowRight1 className="h-5 w-5 flex-shrink-0" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-8 pt-[52px] leading-6 min-[1430px]:flex-nowrap" >
          <div className="flex w-96 flex-shrink-0 flex-col gap-y-2">
            <div className="flex h-12 w-12 flex-shrink-0 flex-col items-center justify-center rounded-full bg-[#F4EBFF] p-3" >
              <Smile className="h-6 w-6 flex-shrink-0" />
            </div>
            <div className="pt-3 text-xl font-semibold leading-[30px] text-[#101828]" >
              Connect with customers
            </div>
            <p>
              Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.
            </p>
            <LearnMoreButtonAlt text="Learn more" />
          </div>
          <div className="flex w-96 flex-shrink-0 flex-col gap-y-2">
            <div className="flex h-12 w-12 flex-shrink-0 flex-col items-center justify-center rounded-full bg-[#F4EBFF] p-3" >
              <Command className="h-6 w-6 flex-shrink-0" />
            </div>
            <div className="pt-3 text-xl font-semibold leading-[30px] text-[#101828]" >
              Connect the tools you already use
            </div>
            <p>
              Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.
            </p>
            <LearnMoreButtonAlt text="Learn more" />
          </div>
          <div className="flex w-96 flex-shrink-0 flex-col gap-y-2">
            <div className="flex h-12 w-12 flex-shrink-0 flex-col items-center justify-center rounded-full bg-[#F4EBFF] p-3" >
              <MessageCircle className="h-6 w-6 flex-shrink-0" />
            </div>
            <div className="pt-3 text-xl font-semibold leading-[30px] text-[#101828]" >
              Our people make the difference
            </div>
            <p>
              We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.
            </p>
            <div className="flex items-end pt-3">
              <div className="flex items-center justify-center gap-x-2">
                <div className="font-semibold text-[#6941C6]">
                  Learn more
                </div>
                <ArrowRight3 className="h-5 w-5 flex-shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-28 pt-24 text-4xl font-semibold leading-[44px] tracking-[-0.32px] text-[#101828]" >
        FAQs
      </section>
      <p className="pl-28 pr-[560px] pt-5 text-xl leading-[30px]">
        {
          "Everything you need to know about the product and billing. Can’t find the answer you’re looking for? Please "
        }
        <span className="underline">chat to our friendly team</span>
        .
      </p>
      <div className="flex flex-wrap items-start justify-center gap-x-8 gap-y-8 px-28 pt-16 leading-6 min-[1430px]:flex-nowrap" >
        <FAQSection className="w-96" />
        <div className="flex w-96 flex-shrink-0 flex-col gap-y-2">
          <div className="text-lg font-semibold leading-7 text-[#101828]">
            Can I change my plan later?
          </div>
          <p>
            Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.
          </p>
          <div className="pt-20 text-xl font-medium leading-[30px] text-[#101828]" >
            How does billing work?
          </div>
          <p>
            Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.
          </p>
        </div>
        <div className="flex w-96 flex-shrink-0 flex-col gap-y-2">
          <div className="text-lg font-semibold leading-7 text-[#101828]">
            What is your cancellation policy?
          </div>
          <p>
            We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.
          </p>
          <div className="pt-20 text-xl font-medium leading-[30px] text-[#101828]" >
            How do I change my account email?
          </div>
          <p>
            You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.
          </p>
        </div>
      </div>
      <footer className="flex items-end justify-center px-28 pt-16">
        <div className="flex flex-grow flex-col justify-center rounded-2xl bg-gray-50 p-8" >
          <div className="flex flex-wrap items-start justify-center gap-x-64 gap-y-[22px] min-[1430px]:flex-nowrap" >
            <div className="flex w-[768px] flex-shrink-0 flex-col gap-y-2 self-stretch" >
              <div className="text-xl font-medium leading-[30px] text-[#101828]" >
                Still have questions?
              </div>
              <div className="text-lg leading-7">
                Can’t find the answer you’re looking for? Please chat to our friendly team.
              </div>
            </div>
            <button className="flex items-center justify-center rounded-lg border border-solid border-[#7F56D9] bg-[#7F56D9] px-[17px] py-[9px] drop-shadow-lg" >
              <div className="flex-grow text-center font-semibold leading-6 text-white" >
                Get in touch
              </div>
            </button>
          </div>
        </div>
      </footer>
      <footer className="mt-24 flex items-center justify-center bg-[#53389E] px-28 py-24" >
        <div className="flex flex-grow flex-wrap items-start justify-center gap-x-44 gap-y-6 min-[1430px]:flex-nowrap" >
          <div className="flex w-[768px] flex-shrink-0 flex-col gap-y-[17px] self-stretch" >
            <div className="text-4xl font-semibold leading-[44px] tracking-[-0.32px] text-white" >
              Start your 30-day free trial
            </div>
            <div className="pt-[2.7px] text-xl leading-[30px] text-[#E9D7FE]">
              Join over 4,000+ startups already growing with Untitled.
            </div>
            <div className="flex items-end pr-96 pt-6">
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-[15px] min-[1430px]:flex-nowrap" >
                <div className="flex items-center justify-center gap-x-[9.3px]" >
                  <Logomark className="h-7 w-7 flex-shrink-0" />
                  <div className="flex flex-col items-center justify-end pt-[5.2px]" >
                    <Logotype1 className="h-[18px] w-14 flex-shrink-0" />
                  </div>
                </div>
                <div className="flex items-center justify-center gap-x-[8.6px]" >
                  <Logomark1 className="h-8 w-[19px] flex-shrink-0" />
                  <div className="flex flex-grow flex-col items-center pt-[2.7px]" >
                    <Logotype2 className="h-[18px] w-20 flex-shrink-0" />
                  </div>
                </div>
                <div className="flex items-center justify-center gap-x-[8.9px]" >
                  <Logomark2 className="h-7 w-7 flex-shrink-0" />
                  <Logotype3 className="h-3.5 w-20" />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-[15px] pr-[347px] min-[1430px]:flex-nowrap" >
              <div className="flex items-center justify-center gap-x-[8.9px]">
                <Logomark3 className="h-7 w-7 flex-shrink-0" />
                <div className="flex flex-col items-center justify-end pt-[3.6px]" >
                  <Logotype4 className="h-[18px] w-16 flex-shrink-0" />
                </div>
              </div>
              <div className="flex items-center justify-center gap-x-[8.6px]">
                <Logomark4 className="h-7 w-7 flex-shrink-0" />
                <Logotype5 className="mt-[1.6px] h-[18px] w-[86px]" />
              </div>
              <div className="flex items-center justify-center gap-x-[9.2px]">
                <Logomark5 className="h-7 w-[26px] flex-shrink-0" />
                <div className="flex flex-grow flex-col items-center justify-end self-stretch" >
                  <Logotype6 className="h-[19px] w-24 flex-shrink-0" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-x-3 text-center font-semibold leading-6" >
            <button className="flex items-center justify-center rounded-lg border border-solid border-[#D0D5DD] bg-white px-[19px] py-[11px] drop-shadow-lg" >
              <div className="flex-grow text-center text-[#344054]">
                Learn more
              </div>
            </button>
            <button className="flex items-center justify-center rounded-lg border border-solid border-[#7F56D9] bg-[#7F56D9] px-[19px] py-[11px] drop-shadow-lg" >
              <div className="flex-grow text-center text-white">
                Get started
              </div>
            </button>
          </div>
        </div>
      </footer>
      <footer className="flex flex-wrap justify-center gap-x-8 gap-y-8 px-28 pt-16 font-semibold min-[1430px]:flex-nowrap" >
        <div className="flex w-44 flex-shrink-0 flex-col items-start gap-y-3">
          <div className="self-stretch text-sm leading-5 text-[#667085]">
            Product
          </div>
          <div className="self-stretch pt-1 leading-6">Overview</div>
          <div className="leading-6">Features</div>
        </div>
        <div className="flex w-44 flex-shrink-0 flex-col items-start gap-y-3">
          <div className="self-stretch text-sm leading-5 text-[#667085]">
            Company
          </div>
          <div className="self-stretch pt-1 leading-6">About us</div>
          <div className="leading-6">Careers</div>
        </div>
        <div className="flex w-44 flex-shrink-0 flex-col items-start gap-y-3">
          <div className="self-stretch text-sm leading-5 text-[#667085]">
            Resources
          </div>
          <div className="self-stretch pt-1 leading-6">Blog</div>
          <div className="leading-6">Newsletter</div>
        </div>
        <div className="flex w-44 flex-shrink-0 flex-col items-start gap-y-3">
          <div className="self-stretch text-sm leading-5 text-[#667085]">
            Use cases
          </div>
          <div className="self-stretch pt-1 leading-6">Startups</div>
          <div className="leading-6">Enterprise</div>
        </div>
        <div className="flex w-44 flex-shrink-0 flex-col items-start gap-y-3">
          <div className="self-stretch text-sm leading-5 text-[#667085]">
            Social
          </div>
          <div className="self-stretch pt-1 leading-6">Twitter</div>
          <div className="leading-6">LinkedIn</div>
        </div>
        <div className="flex w-44 flex-shrink-0 flex-col items-start gap-y-3">
          <div className="self-stretch text-sm leading-5 text-[#667085]">
            Legal
          </div>
          <div className="self-stretch pt-1 leading-6">Terms</div>
          <div className="leading-6">Privacy</div>
        </div>
      </footer>
      <footer className="flex flex-wrap justify-center gap-x-[85px] gap-y-16 pl-28 pr-56 pt-3 font-semibold leading-6 min-[1430px]:flex-nowrap" >
        <div className="flex flex-col items-start gap-y-3">
          <LoginSignupButtons
            text="Solutions"
            text1="New"
            outerContainerClassName="self-stretch gap-x-2"
            buttonContainerClassName="rounded-2xl px-2 py-0.5 bg-[#ECFDF3]"
            buttonTextClassName="text-xs font-medium text-[#027A48] leading-[18px]"
           />
          <div>Tutorials</div>
          <div>Pricing</div>
          <div>Releases</div>
        </div>
        <div className="flex flex-col items-start gap-y-3">
          <div>Press</div>
          <div>News</div>
          <div className="self-stretch">Media kit</div>
          <div>Contact</div>
        </div>
        <div className="flex justify-end pl-[52px]">
          <div className="flex flex-col items-start gap-y-3">
            <div>Events</div>
            <div className="self-stretch">Help centre</div>
            <div>Tutorials</div>
            <div>Support</div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-y-3 pl-8">
          <div>Government</div>
          <div>SaaS</div>
          <div className="self-stretch">Marketplaces</div>
          <div>Ecommerce</div>
        </div>
        <div className="flex flex-col items-start gap-y-3 pl-[17px]">
          <div className="self-stretch">Facebook</div>
          <div>GitHub</div>
          <div className="self-stretch">AngelList</div>
          <div>Dribbble</div>
        </div>
        <div className="flex justify-end pl-12">
          <div className="flex flex-col items-start gap-y-3">
            <div>Cookies</div>
            <div className="self-stretch">Licenses</div>
            <div>Settings</div>
            <div>Contact</div>
          </div>
        </div>
      </footer>
      <footer className="flex h-16 items-end justify-center">
        <div className="h-px w-[1216px] flex-shrink-0 bg-[#E4E7EC]" />
      </footer>
      <div className="flex items-end justify-center px-28 pt-8">
        <div className="flex flex-grow flex-wrap items-center justify-center gap-x-[781px] gap-y-3 min-[1430px]:flex-nowrap" >
          <div className="flex items-center justify-center gap-x-2.5 self-stretch" >
            <div className="z-0 flex h-8 w-8 flex-shrink-0 rounded-lg">
              <div className="relative flex h-full w-full flex-shrink-0 flex-col items-center justify-end overflow-clip rounded-lg border-[0.3px] border-solid border-[#D0D5DD] [background-image:linear-gradient(180deg,_white,_#D0D5DD)]" >
                <div className="bg-bg-grid-0 absolute inset-0 z-0 bg-cover bg-center" />
                <Dot1 className="z-[1] h-4 w-4 flex-shrink-0" />
                <div className="z-[2] flex h-2 flex-shrink-0 flex-col self-stretch" >
                  <div className="-mt-2 h-4 flex-shrink-0 rounded-b-lg bg-white/20 backdrop-blur-[2.5px]" />
                </div>
              </div>
            </div>
            <Logotype7 className="h-8 w-24 flex-shrink-0" />
          </div>
          <div className="leading-6 text-[#667085]">
            © 2077 Untitled UI. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

interface DesktopProps {
  className?: string;
}
