import React from "react";

interface Props extends Omit<Partial<HTMLElement>, "children"> {
  component?: React.ElementType<any>;
  sx?: React.CSSProperties;
  children?: React.ReactNode;
}

const Box = ({ component = "div", sx, children, style, ...other }: Props) => {
  const Component = component;
  return (
    <Component style={{ ...style, ...sx }} {...other}>
      {children}
    </Component>
  );
};

export default Box;
