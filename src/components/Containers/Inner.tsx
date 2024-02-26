import type { ContainerProps } from "./types";

const Inner = ({ children }: ContainerProps) => {
  return (
    <div className="flex w-full flex-col gap-5 overflow-x-auto text-[14px]">
      {children}
    </div>
  );
};

export default Inner;
