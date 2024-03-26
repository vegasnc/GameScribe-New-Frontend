interface FormLabelProps {
  children: React.ReactNode;
}

const Label = ({ children }: FormLabelProps) => {
  return <label className="text-[14px] font-bold text-theme">{children}</label>;
};

export default Label;
