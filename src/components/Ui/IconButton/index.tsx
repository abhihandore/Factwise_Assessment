import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";
import styles from "./IconButton.module.css";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: string;
}
const IconButton: FC<IconButtonProps> = ({
  children,
  size,
  style,
  className,
  ...buttonProps
}) => {
  return (
    <button
      className={`${styles.iconButton} ${className || ""}`}
      style={{ ...style, ...(size && { fontSize: size }) }}
      {...buttonProps}
    >
      {React.Children.only(children)}
    </button>
  );
};

export default IconButton;
