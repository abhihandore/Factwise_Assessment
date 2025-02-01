import { ValidationSchema } from "./type";

export const validations: ValidationSchema = {
    dob: {
      message: "Please enter a valid date",
      validate: (value: string) => {
        if (!value || isNaN(Date.parse(value))) return true; // Invalid if the date is empty or not a valid date
  
        const birthDate = new Date(value);
        const today = new Date();
  
        // Set the time of 'today' to midnight to only compare the date, not time
        today.setHours(0, 0, 0, 0);
  
        // Check if the selected date is greater than or equal to today
        if (birthDate >= today) {
          return true; // Invalid if the birthdate is today or in the future
        }
  
        return false; // Valid if the birthdate is in the past
      },
    },
    description: {
      message: "Please enter a description",
      validate: (value: string) => {
        return !value;
      },
    },
    country: {
      message: "",
      validate(value: string) {
        if (!value) {
          this.message = "Please enter a country";
          return true; // Returns true if value is empty;
        } else if (/\d/.test(value)) {
          this.message = "Number is not allowed";
          return true; // Returns true if value contains a number;
        }
        return false;
      },
    },
    gender: {
      message: "Please select a gender",
      validate: (value: string) => {
        return !value;
      },
    },
};