import React, { ReactNode } from "react";

type tagVariant = "filled" | "bordered" | "icon" | "borderedIcon";
type tagColour = "cta" | "foreground";
type tagIcon = "" | "location";

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: tagVariant;
  colour?: tagColour;
  icon?: tagIcon | ReactNode;
}

const icons: Record<tagIcon, ReactNode> = {
  "": null,
  location: (
    <svg
      version="1.0"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 64 64"
      enableBackground="new 0 0 64 64"
      fill=""
      stroke=""
      transform="matrix(1, 0, 0, 1, 0, 0)"
      strokeWidth="0.00064"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          fill="#f8f7f3"
          d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
        />{" "}
      </g>
    </svg>
  ),
};

export const Tag: React.FC<TagProps> = ({
  variant = "filled",
  colour = "cta",
  icon = "",
  children,
  className,
  ...props
}) => {
  const baseStyles = `inline-flex items-center w-auto self-start text-sm font-montserrat px-2 py-1 rounded-md`;

  const variantStyles: Record<tagVariant, string> = {
    filled: `bg-foreground text-background`,
    bordered: `border border-${colour} text-${colour}`,
    icon: `text-${colour} hover:bg-${colour}/10 p-2`,
    borderedIcon: `bg-transparent border-${colour} border-[0.5px] text-cta py-4`,
  };

  const renderIcon =
    typeof icon === "string" && icon in icons ? icons[icon as tagIcon] : icon;

  return (
    <span
      className={`${baseStyles} ${variantStyles[variant]} ${className || ""}`}
      {...props}
    >
      {renderIcon && <span className="mr-1">{renderIcon}</span>}
      {children}
    </span>
  );
};
