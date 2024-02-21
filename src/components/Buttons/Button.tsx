type ButtonVarient = "filled" | "outlined";
type ButtonSize = "sm" | "md" | "lg";
type ButtonColor = "primary" | "secondary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVarient;
  size?: ButtonSize;
  color?: ButtonColor;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "filled",
  size = "md",
  color = "primary",
  children,
  ...props
}) => {
  const baseStyles = `font-button rounded font-semibold`;
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

  const buttonStyle = `${baseStyles} ${sizeStyles[size]} ${colorStyles[color][variant]}`;
  return (
    <button className={["storybook-button", buttonStyle].join(" ")} {...props}>
      {children}
    </button>
  );
};
