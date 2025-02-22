export type CookieList = {
  name: string;
  value: string;
  maxAge?: number;
  path?: string;
  secure?: boolean;
  httpOnly?: boolean;
  sameSite?: string;
};

const createCookie = (cookieListItem: CookieList) => {
  let cookie = `${cookieListItem.name}=${cookieListItem.value};`;

  cookie += `path=${cookieListItem.path || '/'};`;
  if (cookieListItem.maxAge) cookie += `max-age=${cookieListItem.maxAge};`;
  if (cookieListItem.secure) cookie += 'secure;';
  if (cookieListItem.httpOnly) cookie += 'httpOnly;';
  if (cookieListItem.sameSite) cookie += `SameSite=${cookieListItem.sameSite};`;

  document.cookie = cookie;
};

const getCookie = (name: string) => {
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split('=');

    if (cookie[0].trim() === name) {
      return cookie[1].trim();
    }
  }
};

const hasCookie = (name: string) => {
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split('=');

    if (cookie[0].trim() === name) {
      return true;
    }
  }

  return false;
};

const deleteCookie = (name: string) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

const clearCookies = () => {
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split('=');

    document.cookie = `${cookie[0]}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
};

export { clearCookies, createCookie, deleteCookie, getCookie, hasCookie };

const Cookies = {
  get: getCookie,
  set: createCookie,
  remove: deleteCookie,
  has: hasCookie,
  clear: clearCookies,
};

export default Cookies;
