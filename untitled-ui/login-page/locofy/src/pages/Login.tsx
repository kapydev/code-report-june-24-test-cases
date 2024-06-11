import { FunctionComponent } from "react";
import DropdownHeaderNavigation from "../components/DropdownHeaderNavigation";
import FrameComponent from "../components/FrameComponent";

const Login: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[302px] box-border gap-[96px] leading-[normal] tracking-[normal] mq450:gap-[24px] mq750:gap-[48px]">
      <DropdownHeaderNavigation />
      <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <FrameComponent />
      </section>
    </div>
  );
};

export default Login;
