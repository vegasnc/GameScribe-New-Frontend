import type { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import type { iAuthContext } from "../types";
import { SkullVector } from "~/components/Background/FloatingImage";
import { Button } from "~/components/Buttons/Button";
import { FormGroup, Input, Label } from "~/components/Forms";
import { ChevronRight } from "~/components/Icons";
import { AuthContext } from "../context";
import { GoBack } from "./GoBack";

const schema = z.object({
  email: z.string(),
  password: z.string(),
});

type FormFields = z.infer<typeof schema>;

export const SigninForm = () => {
  const router = useRouter();

  // eslint-disable-next-line
  const { handleLogin } = useContext(AuthContext) as iAuthContext;

  // form handler
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(schema),
  });

  // submit function
  const onSubmit: SubmitHandler<FormFields> = (data) => {
    handleLogin(data);
  };

  return (
    <div className="flex w-[380px] flex-col justify-between 2xl:h-[700px]">
      <div className="mb-5 flex w-full flex-col gap-4">
        <div className="relative flex w-full flex-col items-center gap-5">
          <h1 className="w-[234px] text-center font-stat text-[32px] font-bold leading-[110%]">
            MY ACCOUNT
          </h1>
          <div className="boder-2 flex h-[120px] w-[120px] shrink-0 items-center justify-center rounded-full border border-theme bg-theme-light text-theme-light">
            {/* TODO: add color prop to skull vector */}
            <SkullVector />
          </div>
          <GoBack />
        </div>
        <div className="flex flex-col">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
            id="signin-form"
          >
            <FormGroup>
              <Label>* Email</Label>
              <Input
                {...register("email")}
                type="email"
                placeholder="example@mail.com"
              />
              {errors.email && (
                <p className="text-xs text-red-600">{errors.email.message}</p>
              )}
            </FormGroup>

            <FormGroup>
              <Label>* Password</Label>
              <Input
                {...register("password")}
                type="password"
                placeholder="password"
              />
              {errors.password && (
                <p className="text-xs text-red-600">
                  {errors.password.message}
                </p>
              )}
            </FormGroup>
          </form>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <Button form="signin-form" type="submit" loading={isSubmitting}>
          Sign in <ChevronRight />
        </Button>
        {errors.root && (
          <p className="text-xs text-red-600">{errors.root.message}</p>
        )}
        <a className="flex cursor-pointer items-center gap-1 text-[14px] font-bold">
          {"Don't have an account?"}
          <span
            className="text-theme hover:underline"
            onClick={() => router.replace("/auth?form=signup")}
          >
            Sign up
          </span>
          <ChevronRight />
        </a>
      </div>
    </div>
  );
};
