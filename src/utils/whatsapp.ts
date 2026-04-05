export const getWhatsAppUrl = (formData: {
  businessType?: string;
  budget?: string;
  timeline?: string;
  referenceSite?: string;
}) => {
  const message = encodeURIComponent(
`Hi, I’m interested in a website.

Business Type: ${formData.businessType || 'N/A'}
Budget: ${formData.budget || 'N/A'}
Timeline: ${formData.timeline || 'N/A'}
Reference site: ${formData.referenceSite || 'N/A'}
`);

  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  return `https://wa.me/${whatsappNumber}?text=${message}`;
};

export const openWhatsApp = (formData: {
  businessType?: string;
  budget?: string;
  timeline?: string;
  referenceSite?: string;
}) => {
  const url = getWhatsAppUrl(formData);
  window.open(url, "_blank");
};
