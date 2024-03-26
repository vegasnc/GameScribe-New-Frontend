import type { ContainerProps } from "./types";

export const Title = ({ children }: ContainerProps) => {
  return <h1 className="font-bold">{children}</h1>;
};
