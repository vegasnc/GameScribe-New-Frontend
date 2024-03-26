import * as Avatar from "@radix-ui/react-avatar";
import { useSession } from "next-auth/react";
import { GSIcon } from "../Icons";

type SIZES = "xs" | "sm" | "md" | "lg";

interface AvatarProps {
  size?: SIZES;
  src?: string;
}

export default function RadixAvatar({ size = "md", src }:AvatarProps) {
  const { data: userData } = useSession();
  const baseStyles =
    "rounded-full bg-theme-light text-theme-light flex items-center justify-center";
  const sizes = {
    xs: "w-[30px] h-[30px]",
    sm: "w-[80px] h-[80px]",
    md: "w-[120px] h-[120px]",
    lg: "w-[160px] h-[160px]",
  };

  return (
    <Avatar.Root className={`${baseStyles} ${sizes[size]}`}>
      <Avatar.Fallback >
        <Avatar.Image>
          <GSIcon />
        </Avatar.Image>
      </Avatar.Fallback>
      <Avatar.Image
        className="rounded-full"
        src={!src && userData?.user?.image ? userData.user.image : src }
        alt={userData?.user?.name ?? ""}
      />

    </Avatar.Root>
  );
}
