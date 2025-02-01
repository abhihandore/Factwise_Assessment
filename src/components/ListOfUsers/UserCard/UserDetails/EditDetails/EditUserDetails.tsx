import { useEffect, useMemo, useState } from "react";
import { Celebrity } from "../../../../../types/listOfUsers";
import Label from "../../../../Ui/Label";
import Select from "../../../../Ui/Select/Select";
import Input from "../../../../Ui/Input";
import Textarea from "../../../../Ui/Input/Textarea";
import styles from "../ViewEdit.module.css";
import IconButton from "../../../../Ui/IconButton";
import CancelSvg from "../../../../../assets/icons/CancelSvg";
import SaveSvg from "../../../../../assets/icons/SaveSvg";
import {
  compareIfChangedValues,
  createErrorState,
  SELECT_GENDER_OPTIONS,
} from "../helper";
import { EditUserDetailsFormState } from "./type";
import { validations } from "./validations";

const EditUserDetails = ({
  user,
  onSubmit,
  onCancel,
  updatedName,
}: {
  user: Celebrity;
  onSubmit: (formState: EditUserDetailsFormState) => void;
  onCancel: () => void;
  updatedName: string;
}) => {
  const defaultValues = useMemo(
    () => ({
      dob: user.dob,
      gender: user.gender,
      country: user.country,
      description: user.description,
    }),
    [user]
  );
  const [hasChanges, setHasChanges] = useState(false);
  const [formState, setFormState] = useState(defaultValues);
  const [errorState, setErrorState] = useState(createErrorState(defaultValues));

  const previousName = `${user.first} ${user.last}`;

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasChanges = compareIfChangedValues(
        { ...formState, name: updatedName },
        { ...defaultValues, name: previousName }
      );
      console.log(hasChanges, "hasChanges");

      setHasChanges(hasChanges); // If there are changes, set isValid to false, else true
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [formState, defaultValues, updatedName, previousName]);

  // Form validation function
  const validateForm = () => {
    let isValid = true;
    const newErrorState = { ...errorState };

    // Check each field
    Object.keys(validations).forEach((key) => {
      const fieldKey = key as keyof typeof validations;
      const validation = validations[fieldKey];
      const isInvalid = validation.validate(formState[fieldKey]);

      if (isInvalid) {
        newErrorState[fieldKey] = true;
        isValid = false;
      } else {
        newErrorState[fieldKey] = false;
      }
    });

    setErrorState(newErrorState);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, trigger the onSubmit callback
      onSubmit(formState);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.formFields}>
        <div className={styles.field}>
          <Label htmlFor="dob">Age</Label>
          <Input
            id="dob"
            name="dob"
            type="date"
            value={formState.dob}
            onChange={(evt) =>
              setFormState((prev) => ({ ...prev, dob: evt.target.value }))
            }
            error={errorState.dob}
            helperText={errorState.dob ? validations.dob.message : ""}
            max={new Date().toISOString().split("T")[0]}
            min={"1900-01-01"}
          />
        </div>
        <div className={styles.field}>
          <Label htmlFor="gender">Gender</Label>
          <Select
            id="gender"
            selectedId={formState.gender}
            title="Select Gender"
            options={SELECT_GENDER_OPTIONS}
            onSelect={(id) => setFormState((prev) => ({ ...prev, gender: id }))}
          />
        </div>
        <div className={styles.field}>
          <Label htmlFor="country">Country</Label>
          <Input
            id="country"
            name="country"
            value={formState.country}
            onChange={(evt) =>
              setFormState((prev) => ({ ...prev, country: evt.target.value }))
            }
            error={errorState.country}
            helperText={errorState.country ? validations.country.message : ""}
          />
        </div>
        <div className={styles.field}>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            value={formState.description}
            onChange={(evt) =>
              setFormState((prev) => ({
                ...prev,
                description: evt.target.value,
              }))
            }
            rows={7}
            error={errorState.description}
            helperText={
              errorState.description ? validations.description.message : ""
            }
          />
        </div>
      </div>
      <div className={styles.actionsWrap}>
        <IconButton size="25px" onClick={onCancel}>
          <CancelSvg />
        </IconButton>
        <IconButton size="25px" type="submit" disabled={!hasChanges}>
          <SaveSvg />
        </IconButton>
      </div>
    </form>
  );
};

export default EditUserDetails;
