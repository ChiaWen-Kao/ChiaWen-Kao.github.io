import React, { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "filled" | "bordered" | "icon" | "borderedIcon";
type ButtonColour = "cta" | "foreground";
type ButtonIcon = "" | "link" | "download";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  colour?: ButtonColour;
  icon?: ButtonIcon | ReactNode;
}

const icons: Record<ButtonIcon, ReactNode> = {
  "": null,
  link: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="18"
      height="18"
      viewBox="0,0,256,256"
    >
      <g
        fill="#eecd55"
        fillRule="nonzero"
        stroke="none"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeDasharray=""
        strokeDashoffset="0"
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="inherit"
      >
        <g transform="scale(5.12,5.12)">
          <path d="M33.40625,0c-0.55078,0.05078 -0.95703,0.54297 -0.90625,1.09375c0.05078,0.55078 0.54297,0.95703 1.09375,0.90625h13l-8,8c0.69922,0.19922 1.20703,0.70703 1.40625,1.40625l8,-8v13c-0.00391,0.35938 0.18359,0.69531 0.49609,0.87891c0.3125,0.17969 0.69531,0.17969 1.00781,0c0.3125,-0.18359 0.5,-0.51953 0.49609,-0.87891v-16.40625h-16.40625c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0zM2,10c-1.10156,0 -2,0.89844 -2,2v36c0,1.10156 0.89844,2 2,2h36c1.10156,0 2,-0.89844 2,-2v-36c0,-0.19922 0.00781,-0.30078 -0.09375,-0.5l-12.8125,12.8125c-0.19922,0.19922 -0.48828,0.28125 -0.6875,0.28125c-0.30078,0 -0.51953,-0.08203 -0.71875,-0.28125c-0.39844,-0.39844 -0.39844,-1.00781 0,-1.40625l12.8125,-12.8125c-0.19922,-0.10156 -0.30078,-0.09375 -0.5,-0.09375z"></path>
        </g>
      </g>
    </svg>
  ),
  download: null,
};

export const Button: React.FC<ButtonProps> = ({
  variant = "filled",
  colour = "cta",
  icon = "",
  children,
  className,
  ...props
}) => {
  const baseStyles = `inline-flex items-center w-auto self-start text-sm font-telugu uppercase cursor-pointer gap-3 px-4 py-3`;

  const variantStyles: Record<ButtonVariant, string> = {
    filled: `bg-cta text-background`,
    bordered: `border border-${colour} text-${colour} hover:bg-${colour}/10`,
    icon: `text-${colour} hover:bg-${colour}/10 p-2`,
    borderedIcon: `bg-transparent border-${colour} border-[0.5px] text-cta py-4`,
  };

  const renderIcon = typeof icon === "string" && icon in icons ? icons[icon as ButtonIcon] : icon;

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className || ""}`}
      {...props}
    >
      {children}
      {renderIcon}
    </button>
  );
};
