interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}

export const Button = ({
  disabled = false,
  loading = false,
  children,
  ...rest
}: ButtonProps) => {
  const baseStyles = `tranisition-ease flex h-[42px] w-full items-center justify-center gap-[4px] rounded-[8px] bg-theme font-bold text-bg duration-[.2s]`;
  const disabledStyles = `bg-gray-light cursor-not-allowed`;
  const enabledStyles = `bg-theme hover:bg-[#5438c780]`;

  // TODO: spinner component
  if (loading)
    return (
      <button
        className={`${baseStyles} ${disabled ? disabledStyles : enabledStyles}`}
      {...rest}
      >
        loading...
      </button>
    );
  else
    return (
      <button
        className={`${baseStyles} ${disabled ? disabledStyles : enabledStyles}`}
      {...rest}
      >
        {children}
      </button>
    );
};

/* type ButtonVarient = "filled" | "outlined";
type ButtonSize = "sm" | "md" | "lg";
type ButtonColor = "primary" | "secondary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVarient;
  size?: ButtonSize;
  color?: ButtonColor;
  full?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "filled",
  size = "md",
  color = "primary",
  full = false,
  children,
  ...props
}) => {
  const baseStyles = `inline-flex items-center font-button rounded font-semibold`;
  const sizeStyles = {
    sm: "py-1 px-2 text-sm",
    md: "py-2 px-4",
    lg: "py-3 px-6 text-lg",
  };

  const colorStyles = {
    primary: {
      filled: "bg-theme text-bg",
      outlined: "bg-transparent hover:bg-theme text-theme border-theme border",
    },
    secondary: {
      filled: "bg-theme text-text",
      outlined: "bg-transparent hover:bg-theme text-text border-theme border",
    },
  };

  const width = full ? "w-full" : "w-max";

  const buttonStyle = `${baseStyles} ${sizeStyles[size]} ${colorStyles[color][variant]} ${width}`;
  return (
    <button className={["storybook-button", buttonStyle].join(" ")} {...props}>
      {children}
    </button>
  );
}; */
