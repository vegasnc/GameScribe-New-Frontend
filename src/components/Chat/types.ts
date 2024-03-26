import type { FunctionComponent } from "react";

interface ContainerProps {
  children: React.ReactNode;
}

export type ChatBoxContainerComponent = FunctionComponent<ContainerProps>;
export type ChatBoxInnerComponent = FunctionComponent<ContainerProps>;
export type ChatBoxComponent = FunctionComponent & {
  Container: ChatBoxContainerComponent;
  Inner: ChatBoxInnerComponent;
};
