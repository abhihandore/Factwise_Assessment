import { LabelHTMLAttributes } from "react";
import styles from "./Label.module.css";

const Label = (props: LabelHTMLAttributes<HTMLLabelElement>) => {
  const { children, className, ...labelProps } = props;
  return (
    <label className={`${styles.label} ${className || ""}`} {...labelProps}>
      {children}
    </label>
  );
};

export default Label;
