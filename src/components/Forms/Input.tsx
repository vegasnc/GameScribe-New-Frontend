import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";

// TODO: add error styles

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  (props, ref) => {
    const { ...rest } = props;
    return <input className="rounded-lg border-none bg-gray-ex-light" ref={ref} {...rest} />;
  }
);

Input.displayName = 'Input';

export default Input;
