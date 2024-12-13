import type { APIRoute } from "astro";
import { MAILGUN_DOMAIN, mailgunClient } from "@utils/configEmail";
import { formDataEntryToString } from "@utils/convertToString";

export const POST: APIRoute = async ({ request }): Promise<Response> => {
    try {
        const { name, lastName, email, subject, message } = Object.fromEntries(await request.formData());

        await mailgunClient.messages.create(MAILGUN_DOMAIN, {
            from: formDataEntryToString(email),
            to: ["jordycastro1756@gmail.com"],
            subject: formDataEntryToString(subject),
            text: `Mensaje de ${name} ${lastName}:\n\n${message}`,
            html: `
                <h1>Nuevo Mensaje de Contacto</h1>
                <p><strong>Nombre:</strong> ${name} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mensaje:</strong> ${message}</p>
            `,
        });

        return new Response(JSON.stringify({ success: true, message: "Correo enviado con éxito" }));
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ success: false, message: "Error al enviar el correo" }));
    }
};
