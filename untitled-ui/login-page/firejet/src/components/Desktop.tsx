import Header from "./Header";
import LoginHero from "./LoginHero";
import LoginTitle from "./LoginTitle";
import LoginSubtitle from "./LoginSubtitle";
import EmailLabel from "./EmailLabel";
import EmailInputContainer from "./EmailInputContainer";
import PasswordLabel from "./PasswordLabel";
import PasswordInputContainer from "./PasswordInputContainer";
import LoginOptions from "./LoginOptions";
import SignInButtonContainer from "./SignInButtonContainer";
import GoogleSignInButtonContainer from "./GoogleSignInButtonContainer";
import SignUpPrompt from "./SignUpPrompt";

export default function Desktop({ className = "" }: DesktopProps) {
  return (
    <div
      className={`font-inter flex w-full flex-col items-center gap-y-1.5 bg-white pb-72 tracking-[0px] ${className}`}
    >
      <Header />
      <LoginHero />
      <LoginTitle />
      <LoginSubtitle />
      <EmailLabel />
      <EmailInputContainer className="w-[360px]" />
      <PasswordLabel />
      <PasswordInputContainer className="w-[360px]" />
      <LoginOptions />
      <SignInButtonContainer />
      <GoogleSignInButtonContainer />
      <SignUpPrompt />
    </div>
  );
}

interface DesktopProps {
  className?: string;
}
