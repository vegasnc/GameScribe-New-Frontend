import type { ContainerProps } from "./types";

const Content = ({ children }: ContainerProps) => {
  return (
    <div className="container flex items-center gap-3 overflow-x-auto pb-[20px] hover:overflow-x-scroll">
      {children}
    </div>
  );
};

export default Content;
