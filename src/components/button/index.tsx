import { ReactNode } from "react";
import "./style.css";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variation?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Button = ({
  variation = "primary",
  size = "medium",
  leftIcon,
  rightIcon,
  children,
  ...props
}: Props) => {
  return (
    <button className={`btn ${variation} ${size}`} {...props}>
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
};
