import emailjs from "@emailjs/browser";

function getTemplateId(form) {
  const formData = new FormData(form);
  const formType = formData.get("form_type");

  if (formType === "Contact Enquiry") {
    return import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID || import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  }

  if (formType === "Eligibility Checker") {
    return import.meta.env.VITE_EMAILJS_ELIGIBILITY_TEMPLATE_ID || import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  }

  return import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
}

export function getEmailConfig(form) {
  return {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: getTemplateId(form),
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  };
}

export function hasEmailConfig(form) {
  const config = getEmailConfig(form);
  return Boolean(config.serviceId && config.templateId && config.publicKey);
}

export async function sendEmailForm(form) {
  const config = getEmailConfig(form);

  if (!config.serviceId || !config.templateId || !config.publicKey) {
    throw new Error("EmailJS is not configured.");
  }

  return emailjs.sendForm(config.serviceId, config.templateId, form, config.publicKey);
}
