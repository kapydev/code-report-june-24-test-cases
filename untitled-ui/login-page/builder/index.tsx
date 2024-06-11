import React from "react";
import { FC } from "react";

interface LinkItem {
  text: string;
  href: string;
  hasDropdown?: boolean;
}

interface InputProps {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  ariaLabel: string;
}

const navLinks: LinkItem[] = [
  { text: "Home", href: "#" },
  { text: "Products", href: "#", hasDropdown: true },
  { text: "Resources", href: "#", hasDropdown: true },
  { text: "Pricing", href: "#" },
];

const InputField: FC<InputProps> = ({ label, id, type, placeholder, ariaLabel }) => (
  <>
    <label className="mt-8 text-sm font-medium leading-5 text-slate-700" htmlFor={id}>{label}</label>
    <input 
      id={id} 
      type={type} 
      placeholder={placeholder} 
      aria-label={ariaLabel} 
      className="justify-center px-3.5 py-2.5 mt-1.5 max-w-full text-gray-500 bg-white 
                 rounded-lg border border-gray-300 border-solid shadow-sm w-[360px]"
    />
  </>
);

const MyComponent: FC = () => (
  <div className="flex flex-col text-base leading-6 bg-white">
    <header className="flex justify-center items-center px-16 py-5 w-full font-semibold bg-white 
                      border-b border-gray-100 border-solid max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between px-8 w-full max-w-screen-xl max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between my-auto whitespace-nowrap text-slate-600 max-md:flex-wrap">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd99aaa1f9a6f4fc69cc185967030ff58cae31898333414ba01fb722f5ec3d96?apiKey=d595365216b94e63a97d528c395250c7&" alt="Company Logo" className="shrink-0 max-w-full aspect-[4.35] w-[142px]" />
          <nav className="flex gap-5 justify-between py-1">
            {navLinks.map((link, index) => (
              <div key={index} className="flex gap-2 justify-center">
                <a href={link.href}>{link.text}</a>
                {link.hasDropdown && (
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9912b04d492f37b75422383f7c1700b8f4435eb1dc0ebbd76fe57665b81a2564?apiKey=d595365216b94e63a97d528c395250c7&" alt="" className="shrink-0 my-auto w-5 aspect-square" />
                )}
              </div>
            ))}
          </nav>
        </div>
        <div className="flex gap-3 justify-between pl-5">
          <a href="#" className="my-auto text-slate-600">Log in</a>
          <a href="#signUp" className="justify-center px-5 py-2.5 text-white bg-violet-500 rounded-lg border border-violet-500 border-solid shadow-sm">Sign up</a>
        </div>
      </div>
    </header>
    <main className="flex flex-col items-center px-8 pt-20 pb-12 w-full bg-white max-md:px-5 max-md:max-w-full">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c74dc2be4bfbb4def45803c2ffd80783e58f52a2a9c86d1582d6002a5d7e96c?apiKey=d595365216b94e63a97d528c395250c7&" alt="Login Icon" className="mt-4 w-12 border-0 border-gray-300 border-solid aspect-square" />
      <h2 className="mt-6 text-3xl font-semibold leading-10 text-center text-gray-900">Log in to your account</h2>
      <p className="mt-3 text-center text-slate-600">Welcome back! Please enter your details.</p>
      <form className="mt-8 flex flex-col items-center">
        <InputField label="Email" id="emailInput" type="email" placeholder="Enter your email" ariaLabel="Enter your email" />
        <InputField label="Password" id="passwordInput" type="password" placeholder="••••••••" ariaLabel="Enter your password" />
        <div className="flex gap-5 justify-between mt-6 max-w-full text-sm leading-5 w-[360px]">
          <div className="flex gap-2 font-medium text-slate-700">
            <input type="checkbox" id="rememberMe" className="shrink-0 my-auto w-4 h-4 bg-white rounded border border-gray-300 border-solid" />
            <label htmlFor="rememberMe">Remember for 30 days</label>
          </div>
          <a href="#forgotPassword" className="font-semibold text-violet-700">Forgot password</a>
        </div>
        <button type="submit" className="justify-center items-center px-5 py-2.5 mt-6 max-w-full font-semibold text-white bg-violet-500 rounded-lg border border-violet-500 border-solid shadow-sm w-[360px] max-md:px-5">Sign in</button>
        <button type="button" className="flex gap-3 justify-center px-4 py-2.5 mt-4 max-w-full font-semibold bg-white rounded-lg border border-gray-300 border-solid shadow-sm text-slate-700 w-[360px] max-md:px-5">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3936f9452843e8fa1e4a68498314b2f6c784994c176f378c1787522ba5454f85?apiKey=d595365216b94e63a97d528c395250c7&" alt="Google logo" className="shrink-0 w-6 aspect-square" />
          Sign in with Google
        </button>
      </form>
      <div className="flex gap-1 justify-center px-20 mt-8 mb-40 max-w-full text-sm leading-5 w-[360px] max-md:px-5 max-md:mb-10">
        <p className="text-slate-600">Don’t have an account?</p>
        <a href="#signUp" className="font-semibold text-violet-700">Sign up</a>
      </div>
    </main>
  </div>
);

export default MyComponent;