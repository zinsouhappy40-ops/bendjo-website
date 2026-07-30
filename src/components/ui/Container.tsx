import type { HTMLAttributes, ReactNode } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Container({ children, className = "", ...props }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8 ${className}`} {...props}>
      {children}
    </div>
  );
}

export default Container;
