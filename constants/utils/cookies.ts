import { parseCookies, setCookie } from "nookies";

const cookieOption = {
  maxAge: 30 * 24 * 60 * 60,
  path: "/",
};

export type SupportedKeys = "baseUser";

interface CookiePayload {
  key: string;
  data: any;
}

export const getClientCookie = (key: SupportedKeys) => {
  try {
    const cookies = parseCookies();
    return JSON.parse(cookies[key]);
  } catch (e) {
    return {};
  }
};

export function clientSetCookie(payload: CookiePayload) {
  const cookies = parseCookies();
  const str = JSON.stringify(payload.data);

  setCookie(null, payload.key, str, cookieOption);
}

export function clearCookie(key: SupportedKeys) {
  setCookie(null, key, "", cookieOption);
}
