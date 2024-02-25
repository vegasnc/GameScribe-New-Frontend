import { SkullVector } from "../Background/FloatingImage";

type SIZES = "xs" | "sm" | "md" | "lg";

interface AvatarProps {
  size?: SIZES;
  src?: string | (() => JSX.Element);
}

const Avatar = ({ size = "md", src = SkullVector }: AvatarProps) => {
  const hasSrc = typeof src === "string";

  const baseStyles =
    "rounded-full shrink-0 bg-theme-light text-theme-light flex items-center justify-center";
  const styleWithoutSrc = "border border-2 border-theme";
  const sizes = {
    xs: "w-[50px] h-[50px]",
    sm: "w-[80px] h-[80px]",
    md: "w-[120px] h-[120px]",
    lg: "w-[160px] h-[160px]",
  };

  const styleWithSrc = hasSrc
    ? {
        backgroundImage: src,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {};

  return (
    <>
      <div
        className={`${baseStyles} ${sizes[size]} ${hasSrc ? "" : styleWithoutSrc}`}
        style={styleWithSrc}
      >
        {!hasSrc && <SkullVector />}
      </div>
    </>
  );
};

export default Avatar;
