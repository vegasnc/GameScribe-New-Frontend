import type { RefObject } from "react";
import { useEffect, useState } from "react";

interface iUseToggleFocus<T> {
  ref: RefObject<T>;
}

export const useToggleFocus = <T>({ ref }: iUseToggleFocus<T>): {isFocused: boolean} => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  useEffect(() => {
    const handleChange = () => {
      setIsFocused(document.activeElement === ref.current);
    } 

    document.addEventListener("focusin", handleChange);
    document.addEventListener("focusout", handleChange);

    return () => {
      document.removeEventListener("focusin", handleChange)
      document.removeEventListener("focusout", handleChange)
    }
  })

  return { isFocused };
}
