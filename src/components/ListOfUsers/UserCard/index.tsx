import {
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from "react";
import { Celebrity } from "../../../types/listOfUsers";
import AccordionDetails from "../../Ui/Accordion/elements/AccordionDetails";
import AccordionItem from "../../Ui/Accordion/elements/AccordionItem";
import AccordionSummary from "../../Ui/Accordion/elements/AccordionSummary";
import CelebrityName from "./CelebrityName";
import styles from "./UserCard.module.css";
import ViewUserDetails from "./UserDetails/ViewDetails/ViewUserDetails";
import ViewActions from "./UserDetails/ViewDetails/ViewActions";
import EditUserDetails from "./UserDetails/EditDetails/EditUserDetails";
import { isUserIsAdult } from "./UserDetails/helper";
import { EditUserDetailsFormState } from "./UserDetails/EditDetails/type";

interface Props {
  user: Celebrity;
  setFieldInEditMode: Dispatch<SetStateAction<string | null>>;
  currentEdit: string | null;
  onSave: (data: Celebrity) => void;
  onDelete: (id: number) => void;
}
const UserCard: FC<Props> = ({
  user,
  setFieldInEditMode,
  currentEdit,
  onSave,
  onDelete,
}) => {
  const name = `${user.first} ${user.last}`;
  const [userName, setUserName] = useState(name);
  const panelKey = `user_${user.id}`;

  const canEdit = useMemo(() => isUserIsAdult(user.dob), [user.dob]);

  const isEdit = currentEdit === panelKey;

  const handleSave = useCallback(
    (formData: EditUserDetailsFormState) => {
      // Remove the Edit Mode
      setFieldInEditMode(null);

      const [first = "", last = ""] = userName.split(" ");
      const updatedUser: Celebrity = {
        ...user,
        ...formData,
        first,
        last,
      };

      // Pass on complete data to parent for update in the list
      onSave(updatedUser);
    },
    [setFieldInEditMode, onSave, user, userName]
  );

  const handleViewEditToggle = useCallback(() => {
    setFieldInEditMode((prevPanelKey) =>
      prevPanelKey === null ? panelKey : null
    );
  }, [panelKey, setFieldInEditMode]);

  const handleDelete = useCallback(() => {
    setFieldInEditMode(null);
    onDelete(user.id);
  }, [onDelete, user.id, setFieldInEditMode]);

  return (
    <AccordionItem className={styles.cardWrap}>
      <AccordionSummary id={panelKey} preventClick={!!currentEdit}>
        <div className={styles.usersSummary}>
          <div className={styles.userProfile}>
            <img src={user.picture} alt={user.first} />
          </div>
          <div className={styles.userName}>
            <CelebrityName
              isEdit={isEdit}
              name={userName}
              setUserName={setUserName}
            />
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails panelKey={panelKey}>
        {!isEdit ? (
          <>
            <ViewUserDetails user={user} />
            <ViewActions
              canEdit={canEdit}
              onDelete={handleDelete}
              onEdit={handleViewEditToggle}
            />
          </>
        ) : (
          <EditUserDetails
            user={user}
            updatedName={userName}
            onCancel={handleViewEditToggle}
            onSubmit={handleSave}
          />
        )}
      </AccordionDetails>
    </AccordionItem>
  );
};

export default UserCard;
