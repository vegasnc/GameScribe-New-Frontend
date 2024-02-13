type ShortcutSize = "sm" | "md" | "lg";

interface ShortcutProps {
  keys: string[];
  size?: ShortcutSize;
}

export const Shortcut: React.FC<ShortcutProps> = ({ keys, size = "md" }) => {
  const baseStyle = `font-shortcut text-background-light text-[16px] bg-theme-100-light flex flex-row rounded-[8px] gap-[10px] line-height-[140%]`;
  const sizeStyles = {
    sm: "py-1 px-2 text-sm",
    md: "py-[2px] px-[10px]",
    lg: "py-3 px-6 text-lg",
  };

  const shortcutStyle = `${baseStyle} ${sizeStyles[size]}`;

  return (
    <div className={["storybook-shortcut", shortcutStyle].join(" ")}>
      {keys.map((key, index) => (
        <div
          key={index}
          className="flex flex-row items-center justify-center gap-[10px]"
        >
          <p>{key}</p>
          {keys.length > 1 && index !== keys.length - 1 && (
            <div className="h-[16px] w-[2px] bg-background-60-light" />
          )}
        </div>
      ))}
    </div>
  );
};
