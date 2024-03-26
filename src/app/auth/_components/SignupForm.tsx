"use client";
import type { SubmitHandler } from "react-hook-form";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import type { iAccountDetails, iAuthContext } from "../types";
import { SkullVector } from "~/components/Background/FloatingImage";
import { Button } from "~/components/Buttons/Button";
import { ChevronRight } from "~/components/Icons";
import { FormGroup, Input, Label } from "~/components/Forms";
import { AuthContext, DEFAULT_ACCOUNT_DETAILS } from "../context";
import { Requirements } from "./Requirements";
import { GoBack } from "./GoBack";

// zod validation
const schema = z.object({
  nickname: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
});

// zod type
type FormFields = z.infer<typeof schema>;

export const SignupForm = () => {
  const router = useRouter();

  // boolean password requirements
  const [metRequirements, setMetRequirements] = useState({
    containsUppercase: false,
    containsLowercase: false,
    containsSpecialChar: false,
    containsNumber: false,
    minLength: false,
  });

  // hook-form
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: DEFAULT_ACCOUNT_DETAILS,
    resolver: zodResolver(schema),
  });

  // context for account details
  // eslint-disable-next-line
  const { handleRegister, setAccountDetails } = useContext(
    AuthContext,
  ) as iAuthContext;

  // submits account details
  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      // simulates async promise -> 1 second delay
      // TODO: implement react query when time comes
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // sets the account details state in context
      handleRegister(data);
      router.replace("/dashboard?page=welcome");
    } catch (err) {
      // example:
      // logs out any errors relating to form
      setError("email", {
        message: "This email is already taken",
      });
    }
  };

  // handles passwordRequirements
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // checks for bool conditions using regex
    const containsUppercase = /[A-Z]/.test(value);
    const containsLowercase = /[a-z]/.test(value);
    const containsSpecialChar = /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/.test(
      value,
    );
    const containsNumber = /\d/.test(value);
    const minLength = value.length >= 8;

    // sets pass requirements
    setMetRequirements({
      containsUppercase,
      containsLowercase,
      containsSpecialChar,
      containsNumber,
      minLength,
    });

    // resets password state
    setAccountDetails((prev: iAccountDetails) => ({
      ...prev,
      password: value,
    }));
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
        <div>
          <form
            className="flex flex-col gap-3"
            id="account-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormGroup>
              <Label>* Nickname</Label>
              <Input
                {...register("nickname")}
                type="text"
                placeholder="Sir Bartholomew"
              />
              {errors.nickname && (
                <p className="text-xs text-red-600">
                  {errors.nickname.message}
                </p>
              )}
            </FormGroup>
            <FormGroup>
              <Label>* Mail</Label>
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
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters",
                  },
                  validate: (value) => {
                    // validation for password requirements
                    const containsUppercase = /[A-Z]/.test(value);
                    const containsLowercase = /[a-z]/.test(value);
                    const containsSpecialChar =
                      /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/.test(value);
                    const containsNumber = /\d/.test(value);

                    if (
                      !(
                        containsUppercase &&
                        containsLowercase &&
                        containsSpecialChar &&
                        containsNumber
                      )
                    ) {
                      return "Password does not meet complexity requirements";
                    } else {
                      return true;
                    }
                  },
                })}
                type="password"
                placeholder="ex: Critical-fail!"
                onChange={handleChangePassword}
              />
              {errors.password && (
                <p className="text-xs text-red-600">
                  {errors.password.message}
                </p>
              )}
              <Requirements passwordRequirements={metRequirements} />
            </FormGroup>
          </form>
        </div>
      </div>
      <div className="flex w-full flex-col items-center gap-4">
        <div className="flex justify-center gap-5">
          <div className="h-[20px] w-[20px] rounded-full bg-gray-light" />
          <div className="h-[20px] w-[20px] rounded-full bg-gray-light" />
          <div className="h-[20px] w-[20px] rounded-full bg-gray-light" />
        </div>
        <Button form="account-form" type="submit" loading={isSubmitting}>
          Next <ChevronRight />
        </Button>
        {errors.root && (
          <p className="text-xs text-red-600">{errors.root.message}</p>
        )}
        <a className="flex cursor-pointer items-center gap-1 text-[14px] font-bold">
          {"Have an account?"}
          <span
            className="text-theme hover:underline"
            onClick={() => router.replace("/auth?form=signin")}
          >
            Sign in
          </span>
          <ChevronRight />
        </a>
      </div>
    </div>
  );
};
