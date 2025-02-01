import { FC, TextareaHTMLAttributes } from "react";
import styles from "./styles.module.css";
import { HelperText } from "./HelperText";
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  startAdornment?: JSX.Element;
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
}

const Textarea: FC<TextareaProps> = ({
  className,
  fullWidth = false,
  error = false,
  helperText,
  ...textareaProps
}) => {
  return (
    <div className="element_wrap">
      <div className={`${styles.input}`}>
        <textarea
          className={`${className || ""} ${fullWidth && "w-full"} ${
            error && styles.error
          }`}
          {...textareaProps}
        ></textarea>
        {helperText && <HelperText helperText={helperText} error={error} />}
      </div>
    </div>
  );
};

export default Textarea;
