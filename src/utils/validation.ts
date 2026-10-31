/**
 * Validation utilities for landing page forms complying with 152-FZ
 */

export interface FormDataToValidate {
  name: string;
  phone: string;
  consent: boolean;
}

export interface ValidationResult {
  isValid: boolean;
  errors: {
    name?: string;
    phone?: string;
    consent?: string;
  };
}

/**
 * Normalizes phone string to digits
 */
export function extractPhoneDigits(phone: string): string {
  return phone.replace(/\D/g, '');
}

/**
 * Formats a phone number as +7 (XXX) XXX-XX-XX
 */
export function formatPhoneNumber(value: string): string {
  const digits = extractPhoneDigits(value);
  if (!digits) return '';

  let normalized = digits;
  if (normalized.startsWith('8') || normalized.startsWith('7')) {
    normalized = normalized.slice(1);
  }

  let formatted = '+7';
  if (normalized.length > 0) {
    formatted += ' (' + normalized.substring(0, 3);
  }
  if (normalized.length >= 4) {
    formatted += ') ' + normalized.substring(3, 6);
  }
  if (normalized.length >= 7) {
    formatted += '-' + normalized.substring(6, 8);
  }
  if (normalized.length >= 9) {
    formatted += '-' + normalized.substring(8, 10);
  }

  return formatted;
}

/**
 * Validates landing form input according to Russian standard & 152-FZ
 */
export function validateLeadForm(data: FormDataToValidate): ValidationResult {
  const errors: ValidationResult['errors'] = {};

  const trimmedName = data.name.trim();
  if (!trimmedName) {
    errors.name = 'Пожалуйста, введите ваше имя';
  } else if (trimmedName.length < 2) {
    errors.name = 'Имя должно содержать не менее 2 символов';
  }

  const digits = extractPhoneDigits(data.phone);
  if (!digits) {
    errors.phone = 'Пожалуйста, укажите контактный телефон';
  } else if (digits.length < 10 || digits.length > 11) {
    errors.phone = 'Укажите корректный номер телефона (10–11 цифр)';
  }

  if (!data.consent) {
    errors.consent = 'Необходимо согласие на обработку персональных данных';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
