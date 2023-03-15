import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonStyles = cva(
  "btn px-4 py-2.5 transition text-base inner-border-2 relative gap-1.5 font-bold active:inner-border-4",
  {
    variants: {
      variant: {
        blue: "bg-bluish-default text-white inner-border-bluish-hover hover:inner-border-bluish-border-hover hover:bg-bluish-hover focus:shadow-",
        green:
          "bg-greener-default text-white inner-border-greener-border hover:bg-greener-hover focus:shadow-",
        yellow:
          "bg-yellowish-default text-black inner-border-yellowish-border-default hover:inner-border-yellowish-border-hover hover:bg-yellowish-hover focus:shadow-yellowish-border-hover",
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
      variant: "blue",
      rounded: "full",
    },
  },
);

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
