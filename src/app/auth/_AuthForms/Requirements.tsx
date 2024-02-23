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
  
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        
      </div>
    </div>
  )
}
