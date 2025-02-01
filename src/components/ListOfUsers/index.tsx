import { FC, useCallback, useState } from "react";
import { Celebrity } from "../../types/listOfUsers";
import Accordion from "../Ui/Accordion";
import UserCard from "./UserCard";

interface Props {
  users: Celebrity[];
  onSave: (updatedData: Celebrity) => void;
  onDelete: (id: number) => void;
}
const ListOfUsers: FC<Props> = ({ users, onSave, onDelete }) => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const [fieldInEditMode, setFieldInEditMode] = useState<string | null>(null);

  const onChangeTab = useCallback((tab: null | string) => {
    setActiveAccordion(tab);
  }, []);

  if (!users.length) {
    return (
      <p className="text-center">
        <strong>No Users Found</strong>
      </p>
    );
  }

  return (
    <div>
      <Accordion active={activeAccordion} onSelect={onChangeTab}>
        <ul id="users__accordion" style={{ listStyleType: "none" }}>
          {users.map((userData) => {
            return (
              <li key={userData.email}>
                <UserCard
                  user={userData}
                  setFieldInEditMode={setFieldInEditMode}
                  currentEdit={fieldInEditMode}
                  onSave={onSave}
                  onDelete={onDelete}
                />
              </li>
            );
          })}
        </ul>
      </Accordion>
    </div>
  );
};

export default ListOfUsers;
