function setCookie(key, value) {
  document.cookie = `${key}=${value};path=/`;
}
const SESSION_COOKIE = "tokenJwt";

function getCookie(key) {
  return document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(`${key}=`))
    ?.split("=")[1];
}

function removeCookie(key) {
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00`;
}

export { SESSION_COOKIE, setCookie, getCookie, removeCookie };
