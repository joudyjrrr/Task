import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, startIcon, endIcon, ...props }, ref) => {
    return (
      <div>
        {startIcon}
        <input
          type={type}
          className={cn(
            "w-full h-[2.75rem] border-input focus:outline-none bg-transparent  text-sm  transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 flex py-[0.625rem] px-[0.875rem] items-center gap-2 rounded-radius_md border border-gray-300",
            className,
            startIcon && "",
            endIcon && ""
          )}
          ref={ref}
          {...props}
        />
        {endIcon}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
