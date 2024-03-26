import { useRouter } from "next/navigation";
import { ChevronRight } from "~/components/Icons";

export const Options = () => {
  
  const router = useRouter();

  return (
    <div className="mt-[20px] flex flex-col items-center gap-1">
      <a className="cursor-pointer font-bold text-theme hover:underline" onClick={() => router.replace("/auth?form=signin")}>
        Sign in
      </a>
      <a className="flex cursor-pointer items-center gap-1 font-bold hover:underline text-[14px]">
        {"Don't have an account?"}<span className="text-theme">Sign up</span><ChevronRight />
      </a>
    </div>
  );
};
