
export const toggleClass = (el, className) => el.classList.toggle(className);


export const isValidPhone = phone => {
  const REGULAR = /^[\d\+][\d\(\)\ -]{10,20}\d$/;
  const VALID = REGULAR.test(phone);
  return VALID;
}
