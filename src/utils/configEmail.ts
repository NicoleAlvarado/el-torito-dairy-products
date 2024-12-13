import formData from "form-data";
import Mailgun from "mailgun.js";

const mailgun = new Mailgun(formData);

export const { PUBLIC_MAILGUN_API_KEY: MAILGUN_API_KEY, PUBLIC_MAILGUN_DOMAIN: MAILGUN_DOMAIN } = import.meta.env;
export const mailgunClient = mailgun.client({ username: "api", key: MAILGUN_API_KEY });
