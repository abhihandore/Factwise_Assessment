import { EditUserDetailsFormState } from "./EditDetails/type";

// HELPER FUNCTIONS

export function calculateAge(dob: string) {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
}

export function isUserIsAdult(dob: string) {
    return calculateAge(dob) >= 18;
}

export function createErrorState<T extends Record<string, unknown>>(
    obj: T
  ): Record<keyof T, boolean> {
    return Object.keys(obj).reduce((acc, key) => {
      acc[key as keyof T] = false;
      return acc;
    }, {} as Record<keyof T, boolean>);
}

interface compareIfChangedParams extends EditUserDetailsFormState {
    name: string;
}
export function compareIfChangedValues(
  formState: compareIfChangedParams,
  defaultValues: compareIfChangedParams
) {
  return Object.entries(formState).some(([key, value]) => {
    const typedKey = key as keyof compareIfChangedParams;
    if (value !== defaultValues[typedKey]) {
      return true;
    }
    return false;
  });
}

// CONSTANTS
export const genders = {
  male: "Male",
  female: "Female",
  transgender: "Transgender",
  "rather-not-say": "Rather not say",
  other: "Other",
}

export const SELECT_GENDER_OPTIONS = Object.entries(genders).map(([key, value]) => ({
    id: key,
    name: value,
}));