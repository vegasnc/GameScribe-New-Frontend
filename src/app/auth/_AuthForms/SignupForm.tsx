"use client";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SkullVector } from "~/components/Background/FloatingImage";
import { Button } from "~/components/Buttons/Button";
import { ChevronRight } from "~/components/Icons";
import { FormGroup, Input, Label } from "~/components/Forms";
import { Options } from "~/components/Forms/Options";
import { AuthContext, DEFAULT_ACCOUNT_DETAILS } from "../context";
import type { iAccountDetails, iAuthContext } from "../types";
import { iPasswordComplexity } from "./Requirements";

// zod validation
const schema = z.object({
  nickname: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
})

type FormFields = z.infer<typeof schema>;



export const SignupForm = () => {
 
  const [metRequirements, setMetRequirements] = useState({
    containsUppercase: false,
    containsLowercase: false,
    containsSpecialChar: false,
    containsNumber: false,
    minLength: false,
  })

  const { register, 
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: DEFAULT_ACCOUNT_DETAILS, 
    resolver: zodResolver(schema) 
  });

  // eslint-disable-next-line
  const { setAccountDetails } = useContext(
    AuthContext,
  ) as iAuthContext;

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setAccountDetails(data);
    } catch (err) {
      setError("root", {
        message: "This email is already taken"
      });
    }
    console.log(data);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const containsUppercase = /[A-Z]/.test(value);
    const containsLowercase = /[a-z]/.test(value);
    const containsSpecialChar = /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/.test(value);
    const containsNumber = /\d/.test(value);
    const minLength = value.length >= 8;

    setMetRequirements({
      containsUppercase,
      containsLowercase,
      containsSpecialChar,
      containsNumber,
      minLength,
    })

    setAccountDetails((prev: iAccountDetails) => ({ ...prev, password: value }))

  }

  return (
    <div className="flex h-[600px] w-[380px] flex-col justify-between 2xl:h-[700px]">
      <div className="flex w-full flex-col gap-4">
        <div className="flex w-full flex-col items-center">
          <h1 className="w-[234px] text-center font-stat text-[32px] font-bold leading-[110%]">
            MY ACCOUNT
          </h1>
          <div className="boder-2 flex h-[120px] w-[120px] shrink-0 items-center justify-center rounded-full border border-theme bg-theme-light text-theme-light">
            {/* TODO: add color prop to skull vector */}
            <SkullVector />
          </div>
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
              {errors.nickname && <p className="text-red-600 text-xs">{errors.nickname.message}</p>}
            </FormGroup>
            <FormGroup>
              <Label>* Mail</Label>
              <Input
                {...register("email")}
                type="email"
                placeholder="example@mail.com"
              />
              {errors.email && <p className="text-red-600 text-xs">{errors.email.message}</p>}
            </FormGroup>
            <FormGroup>
              <Label>* Password</Label>
              <Input
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 8, message: "Password must have at least 8 characters"},
                  validate: (value) => {
                    const containsUppercase = /[A-Z]/.test(value);
                    const containsLowercase = /[a-z]/.test(value);
                    const containsSpecialChar = /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/.test(value);
                    const containsNumber = /\d/.test(value)

                    if (!(containsUppercase && containsLowercase && containsSpecialChar && containsNumber)) return "Password does not meet complexity requirements"
                    return true;
                  }
                })}
                type="password"
                placeholder="ex: Critical-fail!"
              />
              {errors.password && <p className="text-red-600 text-xs">{errors.password.message}</p>}
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
        {errors.root && <p className="text-red-600 text-xs">{errors.root.message}</p>}
        <Options />
      </div>
    </div>
  );
};
