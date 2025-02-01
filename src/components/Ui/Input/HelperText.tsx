import styles from "./styles.module.css";

export const HelperText = ({
  helperText,
  error,
}: {
  helperText: string;
  error: boolean;
}) => {
  return (
    <p className={`${styles.helperText} ${error ? styles.error : ""}`}>
      {helperText}
    </p>
  );
};
