// Single source for the studio's WhatsApp number and message links.
// wa.me needs the full international number without "+" or spaces.
export const WHATSAPP_NUMBER = '919898086656';

export function whatsappUrl(text = '') {
  return `https://wa.me/${WHATSAPP_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
}

export function openWhatsApp(text) {
  window.open(whatsappUrl(text), '_blank', 'noopener,noreferrer');
}

/**
 * Turn a form submission into a readable WhatsApp message.
 * fields: [['Name', 'Asha'], ['Phone', '98…'], …] — empty values are skipped.
 */
export function formMessage(title, fields) {
  const lines = fields
    .filter(([, v]) => v !== undefined && v !== null && String(v).trim() !== '')
    .map(([k, v]) => `*${k}:* ${String(v).trim()}`);
  return `Hello Arisca Light Studio!\n\n*${title}*\n\n${lines.join('\n')}\n\n(Sent from ariscalightstudio.com)`;
}
