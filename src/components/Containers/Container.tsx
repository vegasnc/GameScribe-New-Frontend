import type { ContainerProps } from "./types";

const Container = ({ children, ...rest }: ContainerProps) => {
  return (
    <div className="w-full max-w-[1180px] rounded-[12px] bg-gray-ex-light p-[36px]" {...rest}>
      {children}
    </div>
  );
};

export default Container;
