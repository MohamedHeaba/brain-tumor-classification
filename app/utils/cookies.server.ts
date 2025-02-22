export const getCookie = (cookie: string, name: string) => {
  const cookies = cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split("=");

    if (cookie[0].trim() === name) {
      return cookie[1].trim();
    }
  }
};