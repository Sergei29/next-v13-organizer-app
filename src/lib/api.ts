import { IUser, IRegisterCredentials, ISignInCredentials } from "@/types";

interface IFetchParams {
  url: string;
  method: string;
  body: any;
  json?: boolean;
}

export const fetcher = async ({
  url,
  method,
  body,
  json = true,
}: IFetchParams) => {
  const res = await fetch(url, {
    method,
    body: body && JSON.stringify(body),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("API Error");
  }

  if (json) {
    const data = await res.json();
    return data;
  }
};

export const register = async (user: IRegisterCredentials) => {
  return fetcher({
    url: "/api/register",
    method: "POST",
    body: user,
    json: false,
  });
};

export const signin = async (user: ISignInCredentials) => {
  return fetcher({
    url: "/api/signin",
    method: "POST",
    body: user,
    json: false,
  });
};

export const signout = async () => {
  return fetcher({
    url: "/api/signout",
    method: "GET",
    body: undefined,
    json: false,
  });
};
