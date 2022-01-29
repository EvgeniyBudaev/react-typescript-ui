type cookieExpiresType = Date | number | string;

export const getCookie = (name: string): string | undefined => {
  const matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        // eslint-disable-next-line
			name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

export const setCookie = (
  name: string,
  value: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: { expires: cookieExpiresType } | Record<string, never>
): void => {
  props = props || {};
  let exp = props.expires;
  if (typeof exp === "number" && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }
  if (exp && exp instanceof Date) {
    props.expires = exp.toUTCString();
  }
  value = encodeURIComponent(value);
  let updatedCookie = name + "=" + value;
  for (const propName in props) {
    updatedCookie += "; " + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }
  document.cookie = updatedCookie;
};

export function deleteCookie(name: string): void {
  setCookie(name, "", { expires: -1 });
}
