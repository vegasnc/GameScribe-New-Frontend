import { CheckIcon } from "~/components/Icons";

// boolean types for password check
export type iPasswordComplexity = {
  containsUppercase: boolean;
  containsLowercase: boolean;
  containsSpecialChar: boolean;
  containsNumber: boolean; 
  minLength: boolean; 
} 

interface RequirementsProps {
  passwordRequirements: iPasswordComplexity;
}

export const Requirements = ({ passwordRequirements }: RequirementsProps) => {
  const {
    containsUppercase,
    containsLowercase,
    containsSpecialChar,
    containsNumber,
    minLength
  } = passwordRequirements;
  return (
    <div className="flex flex-col">
      <Check passed={minLength}>At least 8 characters</Check>
      <Check passed={containsNumber}>Contains number</Check>
      <Check passed={containsUppercase}>Contains uppercase letter</Check>        
      <Check passed={containsLowercase}>Contains lowercase letter</Check>
      <Check passed={containsSpecialChar}>Contains special symbol, eg. !@#$%^&...</Check>
    </div>
  )
}

interface CheckProps {
  passed: boolean;
  children: React.ReactNode;
}

export const Check = ({ passed, children }: CheckProps) => {
  
  const bg = passed ? "text-green-400" : "text-gray-400"
  const text = passed ? "text-text":"text-gray-400";

  return (
    <div className={`${bg} flex flex-row items-center gap-1`}>
      <CheckIcon />
      <p className={text}>{ children }</p>
    </div>
  )
}
