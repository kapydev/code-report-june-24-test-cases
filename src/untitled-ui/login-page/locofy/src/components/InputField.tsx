import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type InputFieldType = {
  className?: string;
  label?: string;
  contentPlaceholder?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const InputField: FunctionComponent<InputFieldType> = ({
  className = "",
  label,
  contentPlaceholder,
  propMinWidth,
}) => {
  const labelStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start max-w-full text-left text-sm text-gray-700 font-text-sm-semibold ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
          <div
            className="relative leading-[20px] font-medium inline-block min-w-[36px]"
            style={labelStyle}
          >
            {label}
          </div>
          <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-white box-border overflow-hidden flex flex-row items-center justify-start py-2 px-[13px] gap-[8px] max-w-full border-[1px] border-solid border-gray-300">
            <input
              className="w-full [border:none] [outline:none] bg-[transparent] h-6 flex-1 flex flex-row items-center justify-start font-text-sm-semibold text-base text-slategray min-w-[199px] max-w-full"
              placeholder={contentPlaceholder}
              type="text"
            />
            <img
              className="h-4 w-4 relative hidden"
              alt=""
              src="/help-icon.svg"
            />
          </div>
        </div>
        <div className="w-80 relative leading-[20px] text-gray-600 hidden">
          This is a hint text to help user.
        </div>
      </div>
    </div>
  );
};

export default InputField;
