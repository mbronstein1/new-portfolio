export default function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export const scrollWithOffset = el => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = el.getAttribute('id') === 'top' ? 0 : -64;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
};
