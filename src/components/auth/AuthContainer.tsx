import { cn } from "@/lib/utils";
import React from "react";

interface AuthContainerProps {
  children: React.ReactNode;
  className?: string;
}

const AuthContainer: React.FunctionComponent<AuthContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        `w-[480px] overflow-hidden m-auto bg-Base-White p-10 bg-[url(../../Assets/Images/Sign_Up/Background.png)] bg-no-repeat bg-top rounded-[0.625rem] shadow-sm flex flex-col items-center`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default AuthContainer;
