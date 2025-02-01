import { FC, useState } from "react";
import DeleteSvg from "../../../../../assets/icons/DeleteSvg";
import EditSvg from "../../../../../assets/icons/EditSvg";
import IconButton from "../../../../Ui/IconButton";
import styles from "../ViewEdit.module.css";
import ConfirmationModal from "../../../../Ui/ConfirmationModal";

interface Props {
  canEdit: boolean;
  onDelete: () => void;
  onEdit: () => void;
}
const ViewActions: FC<Props> = ({ canEdit, onDelete, onEdit }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={styles.actionsWrap}>
      <IconButton size="25px" onClick={() => setOpenModal(true)}>
        <DeleteSvg />
      </IconButton>
      <IconButton size="25px" onClick={onEdit} disabled={!canEdit}>
        <EditSvg />
      </IconButton>
      <ConfirmationModal
        open={openModal}
        onConfirm={onDelete}
        onCancel={() => setOpenModal(false)}
        label="Are you sure you want to delete?"
        confirmBtnText="Delete"
        variant="danger"
      />
    </div>
  );
};

export default ViewActions;
