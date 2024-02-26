export interface iCreation {
  id: number;
  title: string;
  race: string;
  author: string;
  dateCreated: string;
  img: string;
}

export interface ContainerProps {
  children: React.ReactNode;
}

export interface iAction {
  title: string;
  icon: JSX.Element;
}
