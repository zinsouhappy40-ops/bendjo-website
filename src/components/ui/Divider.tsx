import type { HTMLAttributes } from "react";

function Divider({ className = "", ...props }: HTMLAttributes<HTMLHRElement>) {
  return <hr className={`border-0 border-t border-leaf/15 ${className}`} {...props} />;
}

export default Divider;
