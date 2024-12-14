import type { ErrorTypes } from "@types/sharedTypes";

export const validateInput = (input: HTMLInputElement, errors: ErrorTypes): string => {
    for (const [validity, message] of Object.entries(errors)) {
        if (input.validity[validity as keyof ValidityState]) {
            input.setCustomValidity(" ");
            return message;
        }
    }

    input.setCustomValidity("");
    return "";
};
