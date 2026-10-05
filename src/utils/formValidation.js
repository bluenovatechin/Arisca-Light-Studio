/**
 * Form validation and bot protection helpers for Arisca Light Studio
 */

export const validateEmail = (email) => {
  if (!email || typeof email !== 'string') return false;
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email.trim());
};

export const validatePhone = (phone) => {
  if (!phone || typeof phone !== 'string') return false;
  // Clean punctuation, spaces, dashes
  const cleaned = phone.replace(/[\s\-()]/g, '');
  // Valid Indian 10-digit number optionally prefixed with +91 or 91 or 0
  const indianRe = /^(?:(?:\+|0{0,2})91)?[6-9]\d{9}$/;
  // Also accept valid international formats with at least 10 digits
  const genericRe = /^\+?[1-9]\d{9,14}$/;
  return indianRe.test(cleaned) || genericRe.test(cleaned);
};

export const validateRequired = (val, minLen = 2) => {
  if (!val || typeof val !== 'string') return false;
  return val.trim().length >= minLen;
};

/**
 * Checks for spam bot behavior:
 * 1. Honeypot field filled
 * 2. Form submitted in less than minSeconds (humanly impossible)
 */
export const isSpamSubmission = (honeypotVal, mountTimestamp, minSeconds = 1.5) => {
  if (honeypotVal && honeypotVal.trim() !== '') {
    return true;
  }
  if (mountTimestamp && (Date.now() - mountTimestamp) < (minSeconds * 1000)) {
    return true;
  }
  return false;
};
