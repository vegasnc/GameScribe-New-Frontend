import type { ContainerProps } from "./types";

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="w-full max-w-[1180px] rounded-[12px] bg-gray-ex-light p-[36px]">
      {children}
    </div>
  );
};

export default Container;
