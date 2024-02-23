import { ChevronRight } from "../Icons";

export const Options = () => {
  return (
    <div className="mt-[20px] flex flex-col items-center gap-1">
      <a className="cursor-pointer font-bold text-theme hover:underline">
        Sign in
      </a>
      <p className="text-gray font-bold">or</p>
      <a className="flex cursor-pointer items-center gap-1 font-bold text-theme hover:underline">
        Continue without an account <ChevronRight />
      </a>
    </div>
  );
};
