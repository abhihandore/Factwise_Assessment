import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Input from "../../Ui/Input";
import styles from "./UserCard.module.css";
import useDebounce from "../../../hooks/useDebounce";

const CelebrityName = ({
  isEdit,
  name,
  setUserName,
}: {
  isEdit: boolean;
  name: string;
  setUserName: Dispatch<SetStateAction<string>>;
}) => {
  const [input, setInput] = useState(name);
  const debouncedValue = useDebounce(input, 300); // Debounce with 300ms delay

  useEffect(() => {
    if (debouncedValue !== name) {
      setUserName(debouncedValue);
    }
  }, [debouncedValue, name, setUserName]);

  return isEdit ? (
    <Input
      autoFocus
      onChange={(evt) => setInput(evt.target.value)}
      onFocus={(evt) => evt.stopPropagation()}
      value={input}
      className={styles.userNameInput}
    />
  ) : (
    <h4 className={styles.heading}>{name}</h4>
  );
};

export default CelebrityName;
