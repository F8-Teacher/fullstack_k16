"use server";

import { getUser, requestLogin } from "@/services/auth.service";
import { cookies } from "next/headers";

export const loginAction = async (
  prevState: { success?: boolean },
  formData: FormData,
) => {
  const { email, password } = Object.fromEntries(formData.entries());
  const loginData = { email, password } as { email: string; password: string };
  const { data } = await requestLogin(loginData);
  if (!data) {
    return {
      success: false,
    };
  }
  //Lưu token
  const cookieStore = await cookies();
  cookieStore.set("accessToken", data.accessToken, {
    httpOnly: true,
    maxAge: 3600,
  });
  cookieStore.set("refreshToken", data.refreshToken, {
    httpOnly: true,
    maxAge: 3600,
  });
  return {
    success: true,
  };
};

export const getCurrentUser = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  if (!accessToken) {
    return;
  }
  const { data } = await getUser(accessToken);
  if (!data) {
    return;
  }
  return { data, accessToken };
};

export const saveToken = async (newToken: {
  accessToken: string;
  refreshToken: string;
}) => {
  const cookieStore = await cookies();
  cookieStore.set(`accessToken`, newToken.accessToken, {
    httpOnly: true,
  });
  cookieStore.set(`refreshToken`, newToken.refreshToken, {
    httpOnly: true,
  });
};

export const getToken = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const refreshToken = cookieStore.get("refreshToken")?.value;
  return { accessToken, refreshToken };
};

export const removeToken = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("accessToken");
  cookieStore.delete("refreshToken");
};
