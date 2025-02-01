import { memo, useMemo } from "react";
import { Celebrity } from "../../../../../types/listOfUsers";
import styles from "../ViewEdit.module.css";
import Label from "../../../../Ui/Label";
import { calculateAge, genders } from "../helper";

const ViewUserDetails = ({ user }: { user: Celebrity }) => {
  const data = useMemo(
    () => [
      { id: "dob", value: `${calculateAge(user.dob)} Years`, label: "Age" },
      {
        id: "gender",
        value: genders[user.gender as keyof typeof genders] || user.gender,
        label: "Gender",
      },
      { id: "country", value: user.country, label: "Country" },
      { id: "description", value: user.description, label: "Description" },
    ],
    [user]
  );
  return (
    <div className={styles.view_wrap}>
      {data.map((field) => {
        return (
          <div className={styles.field} key={`show_field_${field.id}`}>
            <Label>{field.label}</Label>
            <p>{field.value}</p>
          </div>
        );
      })}
    </div>
  );
};

export default memo(ViewUserDetails);
