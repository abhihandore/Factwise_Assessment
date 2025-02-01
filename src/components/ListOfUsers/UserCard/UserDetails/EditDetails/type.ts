export interface EditUserDetailsFormState {
    dob: string,
    gender: string,
    country: string,
    description: string,
}

export type ValidationSchema = Record<keyof EditUserDetailsFormState, { 
    message: string, 
    validate: (value: string) => boolean 
}>;