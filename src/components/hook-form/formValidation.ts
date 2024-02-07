export const arabicWithCharacterRGX =
  /[\u0600-\u06FF\s0-9۰-۹٠-٩١-٩!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;

export const englishWithCharacterRGX =
  /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;

export const passwordRGX =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/;
//   /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

export const englishRGX = /^[a-zA-Z\s.]*$/;

export const arabicRGX = /^[\u0600-\u06FF\s.]*$/;
