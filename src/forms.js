import emailjs from "@emailjs/browser";

export function getEmailConfig() {
  return {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  };
}

export function hasEmailConfig() {
  const config = getEmailConfig();
  return Boolean(config.serviceId && config.templateId && config.publicKey);
}

export async function sendEmailForm(form) {
  const config = getEmailConfig();

  if (!config.serviceId || !config.templateId || !config.publicKey) {
    throw new Error("EmailJS is not configured.");
  }

  return emailjs.sendForm(config.serviceId, config.templateId, form, config.publicKey);
}
