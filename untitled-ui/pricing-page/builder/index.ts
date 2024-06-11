import * as React from "react";

interface PlanProps {
  price: string;
  title: string;
  features: string[];
  buttonText: string;
}

const Plan: React.FC<PlanProps> = ({ price, title, features, buttonText }) => (
  <article className="flex flex-col grow pb-8 mx-auto w-full bg-white rounded-2xl border border-gray-200 border-solid shadow-lg text-slate-600">
    <div className="flex flex-col px-8 pt-10 font-semibold text-center text-gray-900">
      <div className="justify-center px-16 py-2 text-5xl tracking-tighter whitespace-nowrap">{price}</div>
      <div className="mt-4 text-xl leading-8">{title}</div>
      <div className="mt-1 text-base leading-6 text-slate-600">Billed annually.</div>
    </div>
    {features.map((feature, index) => (
      <div className="flex gap-3 mx-8 mt-4 text-base leading-6" key={index}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5042261bdb43daaf124b6a1d411f8609b79923cdf51803c7d9b7f592fc9eefb?apiKey=d595365216b94e63a97d528c395250c7&" className="shrink-0 w-6 aspect-square fill-emerald-100" alt="" />
        <div>{feature}</div>
      </div>
    ))}
    <button className="justify-center items-center px-5 py-3 mx-8 mt-10 text-base font-semibold leading-6 text-white bg-violet-500 rounded-lg border border-violet-500 border-solid shadow-sm">
      {buttonText}
    </button>
  </article>
);

interface FeatureProps {
  imgSrc: string;
  title: string;
  description: string;
  learnMoreLink: string;
}

const Feature: React.FC<FeatureProps> = ({ imgSrc, title, description, learnMoreLink }) => (
  <article className="flex flex-col grow">
    <img loading="lazy" src={imgSrc} className="w-12 aspect-square" alt="" />
    <h3 className="mt-5 text-xl text-gray-900">{title}</h3>
    <p className="mt-2 leading-6 text-slate-600">{description}</p>
    <a href={learnMoreLink} className="flex gap-2 justify-center self-start mt-5 text-violet-700">
      <span>Learn more</span>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3555161ab301022b562fcbcd95008b0164ce02876c4a1ddaba2d083b66fad14e?apiKey=d595365216b94e63a97d528c395250c7&" className="shrink-0 my-auto w-5 aspect-square" alt="" />
    </a>
  </article>
);

function MyComponent() {
  return (
    <div className="flex flex-col bg-white">
      <header className="flex justify-center items-center px-16 py-5 w-full text-base font-semibold leading-6 bg-white border-b border-gray-100 border-solid max-md:px-5 max-md:max-w-full">
        <nav className="flex gap-5 justify-between px-8 w-full max-w-screen-xl max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 justify-between my-auto whitespace-nowrap text-slate-600 max-md:flex-wrap">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c2b1052c7599d825df1283b7f80cd2f8eda7504e614732be99fdd396c9d3816?apiKey=d595365216b94e63a97d528c395250c7&" className="shrink-0 max-w-full aspect-[4.35] w-[142px]" alt="Company Logo" />
            <div className="flex gap-5 justify-between py-1">
              <a href="#" className="hover:underline">Home</a>
              <div className="flex gap-2 justify-center">
                <a href="#" className="hover:underline">Products</a>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9912b04d492f37b75422383f7c1700b8f4435eb1dc0ebbd76fe57665b81a2564?apiKey=d595365216b94e63a97d528c395250c7&" className="shrink-0 my-auto w-5 aspect-square" alt="" />
              </div>
              <div className="flex gap-2 justify-center">
                <a href="#" className="hover:underline">Resources</a>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9912b04d492f37b75422383f7c1700b8f4435eb1dc0ebbd76fe57665b81a2564?apiKey=d595365216b94e63a97d528c395250c7&" className="shrink-0 my-auto w-5 aspect-square" alt="" />
              </div>
              <a href="#" className="hover:underline">Pricing</a>
            </div>
          </div>
          <div className="flex gap-3 justify-between pl-5">
            <a href="#" className="my-auto text-slate-600">Log in</a>
            <button className="justify-center px-5 py-2.5 text-white bg-violet-500 rounded-lg border border-violet-500 border-solid shadow-sm">Sign up</button>
          </div>
        </nav>
      </header>
      <main className="flex flex-col w-full bg-white max-md:max-w-full">
        <section className="flex flex-col items-start p-20 w-full font-semibold bg-white max-md:px-5 max-md:max-w-full">
          <div className="mt-4 ml-8 text-base leading-6 text-violet-500 max-md:max-w-full">Pricing</div>
          <h1 className="mt-3 ml-8 text-5xl tracking-tighter text-gray-900 max-md:max-w-full max-md:text-4xl">Simple, transparent pricing</h1>
          <p className="mt-6 mb-4 ml-8 text-xl leading-8 text-slate-600 max-md:max-w-full">We believe Untitled should be accessible to all companies, no matter the size.</p>
        </section>
        <section className="flex flex-col items-center px-16 pb-20 w-full bg-white max-md:px-5 max-md:max-w-full">
          <div className="justify-center mb-4 w-full max-w-[1216px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <Plan price="$10/mth" title="Basic plan" features={["Access to all basic features", "Basic reporting and analytics", "Up to 10 individual users", "20GB individual data each user", "Basic chat and email support"]} buttonText="Get started" />
              <Plan price="$20/mth" title="Business plan" features={["200+ integrations", "Advanced reporting and analytics", "Up to 20 individual users", "40GB individual data each user", "Priority chat and email support"]} buttonText="Get started" />
              <Plan price="$40/mth" title="Enterprise plan" features={["Advanced custom fields", "Audit log and data history", "Unlimited individual users", "Unlimited individual data", "Personalised+priority service"]} buttonText="Get started" />
            </div>
          </div>
        </section>
        <section className="flex flex-col items-start p-20 w-full bg-gray-50 max-md:px-5 max-md:max-w-full">
          <div className="mt-4 ml-8 text-base font-semibold leading-6 text-violet-700 max-md:max-w-full">Features</div>
          <h2 className="mt-3 ml-8 text-4xl font-semibold tracking-tighter leading-10 text-gray-900 max-md:max-w-full">Beautiful analytics to grow smarter</h2>
          <p className="mt-5 ml-8 text-xl leading-8 text-slate-600 w-[768px] max-md:max-w-full">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
          <div className="flex flex-col self-stretch px-8 mt-16 mb-4 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <Feature imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/1a8fcbc51ec55330fb32848845862e9053a80fefab6b9c3d86d1620178f6e54c?apiKey=d595365216b94e63a97d528c395250c7&" title="Share team inboxes" description="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop." learnMoreLink="#" />
                <Feature imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/ce8af7eb16e6bd557a7b8e7b4d993c6eb3b31d9c733ae93e0ff86ed053ca4652?apiKey=d595365216b94e63a97d528c395250c7&" title="Deliver instant answers" description="An all-in-one customer service platform that helps you balance everything your customers need to be happy." learnMoreLink="#" />
                <Feature imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/414ec5b91c7c1e888b7bc0218a9eac184c22224303f4b55985515b0eb4e08c0c?apiKey=d595365216b94e63a97d528c395250c7&" title="Manage your team with reports" description="Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks." learnMoreLink="#" />
              </div>
            </div>
            <div className="mt-16 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <Feature imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/eda3f927a68b440efb30c6cc11e8b86f17ecebfd3fe6fe551f73bd2e7e359ee7?apiKey=d595365216b94e63a97d528c395250c7&" title="Connect with customers" description="Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion." learnMoreLink="#" />
                <Feature imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/d72938eb73253a18db0fe74bdf24ed1445e17f6c9f6bd962bcbb88543c2f01af?apiKey=d595365216b94e63a97d528c395250c7&" title="Connect the tools you already use" description="Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools." learnMoreLink="#" />
                <Feature imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/61d561c155c32255c4f60a410ba4bcb0158f54c56e9b5b78739bd2e1fed48371?apiKey=d595365216b94e63a97d528c395250c7&" title="Our people make the difference" description="We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help." learnMoreLink="#" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <section className="flex flex-col p-20 w-full bg-white max-md:px-5 max-md:max-w-full">
        <h2 className="self-start mt-4 ml-8 text-4xl font-semibold tracking-tighter leading-10 text-gray-900 max-md:max-w-full">FAQs</h2>
        <p className="mt-5 ml-8 text-xl leading-8 underline text-slate-600 w-[768px] max-md:max-w-full">Everything you need to know about the product and billing. Can’t find the answer you’re looking for? Please <a href="#" className="underline">chat to our friendly team</a>.</p>
        <div className="flex flex-col px-8 mt-16 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <article className="flex flex-col grow max-md:mt-8">
                <h3 className="text-lg font-semibold leading-7 text-gray-900">Is there a free trial available?</h3>
                <p className="mt-2 text-base leading-6 text-slate-600">Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
              </article>
              <article className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <h3 className="text-lg font-semibold leading-7 text-gray-900">Can I change my plan later?</h3>
                <p className="mt-2 text-base leading-6 text-slate-600">Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.</p>
              </article>
              <article className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <h3 className="text-lg font-semibold leading-7 text-gray-900">What is your cancellation policy?</h3>
                <p className="mt-2 text-base leading-6 text-slate-600">We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.</p>
              </article>
            </div>
          </div>
          <div className="mt-16 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <article className="flex flex-col grow max-md:mt-8">
                <h3 className="text-lg font-semibold leading-7 text-gray-900">Can other info be added to an invoice?</h3>
                <p className="mt-2 text-base leading-6 text-slate-600">Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
              </article>
              <article className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <h3 className="text-lg font-semibold leading-7 text-gray-900">How does billing work?</h3>
                <p className="mt-2 text-base leading-6 text-slate-600">Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.</p>
              </article>
              <article className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <h3 className="text-lg font-semibold leading-7 text-gray-900">How do I change my account email?</h3>
                <p className="mt-2 text-base leading-6 text-slate-600">You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.</p>
              </article>
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-between self-center p-8 mt-16 mb-4 w-full bg-gray-50 rounded-2xl max-w-[1216px] max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <article className="flex flex-col max-md:max-w-full">
            <h3 className="text-xl font-medium leading-8 text-gray-900 max-md:max-w-full">Still have questions?</h3>
            <p className="mt-2 text-lg leading-7 text-slate-600 max-md:max-w-full">
              <span className="text-slate-600">Can’t find the answer you’re looking for?</span>
              <span className="text-slate-600"> Please chat to our friendly team.</span>
            </p>
          </article>
          <button className="justify-center self-start px-5 py-2.5 text-base font-semibold leading-6 text-white bg-violet-500 rounded-lg border border-violet-500 border-solid shadow-sm">Get in touch</button>
        </div>
      </section>
      <section className="flex flex-col items-center p-20 w-full bg-violet-900 max-md:px-5 max-md:max-w-full">
        <div className="my-4 w-full max-w-[1216px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <article className="flex flex-col grow max-md:mt-8 max-md:max-w-full">
              <h2 className="text-4xl font-semibold tracking-tighter leading-10 text-white max-md:max-w-full">Start your 30-day free trial</h2>
              <p className="mt-5 text-xl leading-8 text-purple-200 max-md:max-w-full">Join over 4,000+ startups already growing with Untitled.</p>
              <div className="flex gap-5 justify-between self-start pr-20 mt-10 max-md:flex-wrap max-md:pr-5">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3cf176d6822b2f561735217e2170ada2e11482ba2393a36f9e4d7c0dbfa2669?apiKey=d595365216b94e63a97d528c395250c7&" className="shrink-0 w-24 aspect-[3.03]" alt="" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd35176480150f0f67017c524484c5c7ca12bf32272ca76ce6f78d013cf1d797?apiKey=d595365216b94e63a97d528c395250c7&" className="shrink-0 w-28 max-w-full aspect-[3.45]" alt="" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/28f0d21095510a7252eb54d9477bf1870a781a572e8d49ea2ba808de4fefd10c?apiKey=d595365216b94e63a97d528c395250c7&" className="shrink-0 max-w-full aspect-[3.85] w-[121px]" alt="" />
              </div>
              <div className="flex gap-5 justify-between self-start pr-20 mt-4 max-md:flex-wrap max-md:pr-5">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/092fe51882e25065e871ff5ac70240481b038d7c7a5288b35361a9fc8019518f?apiKey=d595365216b94e63a97d528c395250c7&" className="shrink-0 max-w-full aspect-[3.33] w-[106px]" alt="" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/aaa2acd92ea6fd88dd00d379f222d88ac3b503cd89b57148eaac0084bb661d31?apiKey=d595365216b94e63a97d528c395250c7&" className="shrink-0 max-w-full aspect-[3.85] w-[123px]" alt="" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a952468542ded314c1800097a9b7871ee3b8e527897ba0ba8753f5bb3c99de0?apiKey=d595365216b94e63a97d528c395250c7&" className="shrink-0 w-32 max-w-full aspect-[4]" alt="" />
              </div>
            </article>
            <div className="flex flex-col ml-5 w-[23%] max-md:ml-0 max-md:w-full">
              <div className="flex gap-3 text-base font-semibold leading-6 max-md:mt-8">
                <button className="justify-center px-5 py-3 bg-white rounded-lg border border-gray-300 border-solid shadow-sm text-slate-700">Learn more</button>
                <button className="justify-center px-5 py-3 text-white bg-violet-500 rounded-lg border border-violet-500 border-solid shadow-sm">Get started</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="flex flex-col px-20 pt-14 pb-12 w-full bg-white leading-[150%] max-md:px-5 max-md:max-w-full">
        <nav className="flex gap-5 self-center max-md:flex-wrap">
          <section className="flex flex-col flex-1 whitespace-nowrap">
            <h3 className="text-sm font-semibold leading-5 text-gray-500">Product</h3>
            <a href="#" className="mt-4 text-base font-semibold text-slate-600">Overview</a>
            <a href="#" className="mt-3 text-base font-semibold text-slate-600">Features</a>
            <a href="#" className="flex gap-2 mt-3">
              <span className="text-base font-semibold text-slate-600">Solutions</span>
              <span className="justify-center self-start px-2 py-0.5 text-xs font-medium text-center text-emerald-700 bg-emerald-50 rounded-2xl">New</span>
            </a>
            <a href="#" className="mt-3 text-base font-semibold text-slate-600">Tutorials</a>
            <a href="#" className="mt-3 text-base font-semibold text-slate-600">Pricing</a>
            <a href="#" className="mt-3 text-base font-semibold text-slate-600">Releases</a>
          </section>
          <section className="flex flex-col flex-1 text-base font-semibold text-slate-600">
            <h3 className="text-sm leading-5 text-gray-500">Company</h3>
            <a href="#" className="mt-4">About us</a>
            <a href="#" className="mt-3">Careers</a>
            <a href="#" className="mt-3">Press</a>
            <a href="#" className="mt-3">News</a>
            <a href="#" className="mt-3">Media kit</a>
            <a href="#" className="mt-3">Contact</a>
          </section>
          <section className="flex flex-col flex-1 text-base font-semibold text-slate-600">
            <h3 className="text-sm leading-5 text-gray-500">Resources</h3>
            <a href="#" className="mt-4">Blog</a>
            <a href="#" className="mt-3">Newsletter</a>
            <a href="#" className="mt-3">Events</a>
            <a href="#" className="mt-3">Help centre</a>
            <a href="#" className="mt-3">Tutorials</a>
            <a href="#" className="mt-3">Support</a>
          </section>
          <section className="flex flex-col flex-1 text-base font-semibold text-slate-600">
            <h3 className="text-sm leading-5 text-gray-500">Use cases</h3>
            <a href="#" className="mt-4">Startups</a>
            <a href="#" className="mt-3">Enterprise</a>
            <a href="#" className="mt-3">Government</a>
            <a href="#" className="mt-3">SaaS</a>
            <a href="#" className="mt-3">Marketplaces</a>
            <a href="#" className="mt-3">Ecommerce</a>
          </section>
          <section className="flex flex-col flex-1 text-base font-semibold text-slate-600">
            <h3 className="text-sm leading-5 text-gray-500">Social</h3>
            <a href="#" className="mt-4">Twitter</a>
            <a href="#" className="mt-3">LinkedIn</a>
            <a href="#" className="mt-3">Facebook</a>
            <a href="#" className="mt-3">GitHub</a>
            <a href="#" className="mt-3">AngelList</a>
            <a href="#" className="mt-3">Dribbble</a>
          </section>
          <section className="flex flex-col flex-1 text-base font-semibold text-slate-600">
            <h3 className="text-sm leading-5 text-gray-500">Legal</h3>
            <a href="#" className="mt-4">Terms</a>
            <a href="#" className="mt-3">Privacy</a>
            <a href="#" className="mt-3">Cookies</a>
            <a href="#" className="mt-3">Licenses</a>
            <a href="#" className="mt-3">Settings</a>
            <a href="#" className="mt-3">Contact</a>
          </section>
        </nav>
        <div className="flex flex-col px-8 mt-16 text-base text-gray-500 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="shrink-0 h-px bg-gray-200 max-md:max-w-full" />
          <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap max-md:max-w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/941fc251086afad9bbf45c70febdae88e07889c4582eaf73adc82f5bfb02a367?apiKey=d595365216b94e63a97d528c395250c7&" className="shrink-0 max-w-full aspect-[4.35] w-[142px]" alt="Footer Logo" />
            <p className="my-auto">© 2077 Untitled UI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MyComponent;