import React, { ButtonHTMLAttributes } from "react";


type ButtonVariant = "filled" | "bordered" | "icon";
type ButtonColour = "cta" | "foreground";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  colour?: ButtonColour;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "filled",
  colour = "cta",
  children,
  className,
  ...props
}) => {
  const baseStyles = `bg-cta px-4 py-2 uppercase`;

  const variantStyles: Record<ButtonVariant, string> = {
    filled: `text-background`,
    bordered: `border border-${colour} text-${colour} hover:bg-${colour}/10`,
    icon: `bg-transparent text-${colour} hover:bg-${colour}/10 p-2`,
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
};