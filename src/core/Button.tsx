import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonStyles = cva("btn px-4 py-2 transition", {
  variants: {
    variant: {
      primary:
        "bg-ocean-green-500 text-white border border-ocean-green-500 hover:border-ocean-green-400 hover:bg-ocean-green-400",
      success:
        "bg-green-600 text-white border border-green-600 hover:border-green-700 hover:bg-green-700",
      warning:
        "bg-saffron-300 text-white border border-saffron-300 hover:border-saffron-500 hover:bg-saffron-500",
      error:
        "bg-red-500 text-white border hover:bg-red-600 border-red-500 hover:border-red-600 ",
    },
    disabled: {
      true: "bg-gray-300 border-gray-300 hover:bg-gray-300 hover:border-gray-300",
    },
    rounded: {
      sm: "rounded-sm",
      md: "rounded-md",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    variant: "primary",
    rounded: "md",
  },
});

export interface ButtonProps extends VariantProps<typeof buttonStyles> {
  title?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  // Types buttonStyles
  variant,
  disabled,
  rounded,

  // Types component
  type = "button",
  title,
  className,
  children,
  onClick,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      type={type}
      onClick={onClick}
      title={title}
      disabled={disabled}
      className={buttonStyles({
        variant,
        disabled,
        rounded,
        class: className,
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
