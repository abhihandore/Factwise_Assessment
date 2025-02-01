import { FC, InputHTMLAttributes } from "react";
import styles from "./styles.module.css";
import { HelperText } from "./HelperText";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  startAdornment?: JSX.Element;
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
}

const Input: FC<InputProps> = ({
  className,
  fullWidth = false,
  startAdornment,
  error = false,
  helperText,
  ...inputProps
}) => {
  return (
    <div className="element_wrap">
      <div
        className={`${styles.input} ${
          startAdornment ? styles.withAdornment : ""
        }`}
      >
        {startAdornment && (
          <span className={styles.adornment}>{startAdornment}</span>
        )}
        <input
          className={`${className || ""} ${fullWidth && "w-full"} ${
            error && styles.error
          }`}
          {...inputProps}
        />
        {helperText && <HelperText helperText={helperText} error={error} />}
      </div>
    </div>
  );
};

export default Input;
