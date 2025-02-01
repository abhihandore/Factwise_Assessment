import CloseSvg from "../../../assets/icons/CloseSvg";
import IconButton from "../IconButton";
import Portal from "../Portal/Portal";
import styles from "./ConfirmationModal.module.css";

const ConfirmationModal = ({
  open = false,
  onConfirm,
  onCancel,
  label = "Are you sure ?",
  confirmBtnText = "Confirm",
  variant,
}: {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  label: string;
  confirmBtnText: string;
  variant: "danger" | "success" | "warning";
}) => {
  return (
    <div>
      {open && (
        <Portal containerId="presentation">
          <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
              <div className={styles.modalHeading}>
                <p>{label}</p>
                <IconButton
                  size="22px"
                  className={styles.closeButton}
                  onClick={onCancel}
                >
                  <CloseSvg />
                </IconButton>
              </div>
              <div className={styles.buttonContainer}>
                <button onClick={onCancel} className={styles.cancelButton}>
                  Cancel
                </button>
                <button
                  onClick={onConfirm}
                  className={`${styles.confirmButton} ${styles[variant]}`}
                >
                  {confirmBtnText}
                </button>
              </div>
            </div>
          </div>
        </Portal>
      )}
    </div>
  );
};

export default ConfirmationModal;
