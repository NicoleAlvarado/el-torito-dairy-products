export type ErrorsTypes = {
    valueMissing?: string;
    patternMismatch?: string;
    tooShort?: string;
};

export const validateInput = (input: HTMLInputElement, errors: Record<string, ErrorsTypes>): string => {
    for (const [validity, message] of Object.entries(errors[input.name])) {
        if (input.validity[validity as keyof ValidityState]) {
            input.setCustomValidity(" ");
            return message;
        }
    }
    input.setCustomValidity("");
    return "";
};
