interface FormGroupProps {
  children: React.ReactNode;
}

const FormGroup = ({ children }: FormGroupProps) => {
  return <div className="flex flex-col">{children}</div>;
};

export default FormGroup;
