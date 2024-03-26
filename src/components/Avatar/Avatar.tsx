import { GSIcon } from "../Icons";

type SIZES = "xs" | "sm" | "md" | "lg";

interface AvatarProps {
  size?: SIZES;
  src?: string | React.FC;
}

const Avatar = ({
  size = "md",
  src = GSIcon,
}: AvatarProps) => {
  const SrcComponent = src;
  const isSrcComponent = typeof SrcComponent === "function";
  const baseStyles =
    "rounded-full  bg-theme-light text-theme flex items-center justify-center border border-1 border-theme-mid";

  const sizes = {
    xs: "w-[30px] h-[30px]",
    sm: "w-[80px] h-[80px]",
    md: "w-[120px] h-[120px]",
    lg: "w-[160px] h-[160px]",
  };

  const styleWithSrc = {
    backgroundImage: `url(${!isSrcComponent && SrcComponent})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <div className={`${baseStyles} ${sizes[size]}`} style={styleWithSrc}>
        {isSrcComponent && <SrcComponent />}
      </div>
    </>
  );
};

export default Avatar;
