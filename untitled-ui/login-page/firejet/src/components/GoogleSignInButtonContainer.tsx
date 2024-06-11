import SocialMediaIcon from "./assets/SocialMediaIcon";

export default function GoogleSignInButtonContainer({
  className = "",
}: GoogleSignInButtonContainerProps) {
  return (
    <div className={`flex justify-center self-stretch pt-2.5 ${className}`}>
      <button className="flex items-center justify-center rounded-lg border border-solid border-[#D0D5DD] bg-white px-[87px] py-[9px] drop-shadow-lg" >
        <div className="flex items-center justify-center gap-x-3">
          <SocialMediaIcon className="h-6 w-6 flex-shrink-0" />
          <div className="font-semibold leading-6 text-[#344054]">
            Sign in with Google
          </div>
        </div>
      </button>
    </div>
  );
}

interface GoogleSignInButtonContainerProps {
  className?: string;
}
