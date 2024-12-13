import type { ErrorsTypes } from "@utils/validateInput";
import { validateInput } from "@utils/validateInput";
import { showToast } from "@utils/handleToast";
import { sendContactEmail } from "@utils/sendEmail";
import { formDataEntryToString } from "@utils/convertToString";

const errors: Record<string, ErrorsTypes> = {
    name: {
        valueMissing: "Por favor, introduce tu nombre",
        patternMismatch: "Por favor, introduce un nombre válido",
        tooShort: "El nombre debe tener al menos 3 caracteres",
    },
    lastName: {
        valueMissing: "Por favor, introduce tus apellidos",
        patternMismatch: "Por favor, introduce solo tus 2 apellidos válidos",
        tooShort: "Los apellidos deben tener al menos 10 caracteres",
    },
    email: {
        valueMissing: "Por favor, introduce tu correo",
        patternMismatch: "Por favor, introduce un correo válido",
        tooShort: "El correo debe tener al menos 5 caracteres",
    },
    subject: {
        valueMissing: "Por favor, introduce el asunto",
        patternMismatch: "Por favor, introduce un asunto sin caracteres especiales o números",
        tooShort: "El asunto debe tener al menos 5 caracteres",
    },
    message: {
        valueMissing: "Por favor, introduce tu mensaje",
        tooShort: "El mensaje debe tener al menos 10 caracteres",
    },
};

type ResponseType = {
    success: boolean;
    message: string;
};

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form") as HTMLFormElement;
    const inputs = form.querySelectorAll("div > input, div > textarea") as NodeListOf<HTMLInputElement>;
    const paragraphs = form.querySelectorAll("div > p") as NodeListOf<HTMLParagraphElement>;
    const sendButton = form.querySelector("button[type='submit']") as HTMLButtonElement;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const data = Object.fromEntries(
            [...new FormData(form)].map(([key, value]) => [key, formDataEntryToString(value)])
        );

        const response: ResponseType = await (await sendContactEmail(data)).json();

        if (response.success) {
            showToast(response.message, "success");
            form.reset();
        } else showToast(response.message, "error");
    });

    inputs.forEach((input, index) => {
        input.setCustomValidity(" ");
        input.addEventListener("input", (e) => {
            const target = e.target as HTMLInputElement;
            paragraphs[index].textContent = validateInput(target, errors);
        });
    });

    sendButton.addEventListener("click", () =>
        inputs.forEach((input, index) => (paragraphs[index].textContent = validateInput(input, errors)))
    );
});
