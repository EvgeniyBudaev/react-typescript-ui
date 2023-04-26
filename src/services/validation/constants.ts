export const LETTERS_EN = "a-zA-Z";
export const LETTERS_RU = "а-яА-ЯёЁ";

export const EMAIL_ERROR_MESSAGE = "Invalid email";
export const EMAIL_REGEXP =
  /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const EMAIL_NOT_CYRILLIC_REGEXP = new RegExp(`^[^${LETTERS_RU}]*$`);
export const EMAIL_NOT_CYRILLIC_ERROR_MESSAGE = "Only Latin characters";

export const EMPTY_FIELD_ERROR_MESSAGE = "Field cannot be empty";

export const NAME_REGEXP = new RegExp(`^[- ${LETTERS_EN}${LETTERS_RU}]*$`);
export const NAME_ERROR_MESSAGE = "Allowed characters: letters only";

export const PASSWORD_ERROR_MESSAGE = "Password mismatch";

export const PHONE_REGEXP = /\+7\s?\(?\d\d\d\)?\s?\d\d\d\s?\d\d\s?\d\d/;
export const PHONE_ERROR_MESSAGE = 'Allowed characters: 0-9, "-", " ", "+", "(", ")"';
