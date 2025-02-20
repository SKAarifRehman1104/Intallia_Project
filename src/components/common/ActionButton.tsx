import React from "react";
import { cn } from "@/lib/utils";

interface ActionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "danger";
  fullWidth?: boolean;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  children,
  variant = "primary",
  fullWidth = false,
  className,
  ...props
}) => {
  const baseStyles =
    "text-base tracking-[-0.32px] leading-none px-8 py-4 rounded-[48px]";

  const variants = {
    primary: "bg-[linear-gradient(90deg,#0DAFDC_0%,#22E9A2_100%)] text-black",
    outline:
      "border border-[#0DAFDC] bg-clip-text text-transparent bg-[linear-gradient(90deg,#0DAFDC_0%,#22E9A2_100%)]",
    danger: "border border-[#FF3A3A] text-[#010000]",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        fullWidth && "w-full",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};