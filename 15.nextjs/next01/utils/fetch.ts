import { saveToken } from "@/app/(main)/_actions/auth.action";
import { requestRefreshToken } from "@/services/auth.service";
import { cookies } from "next/headers";
import "server-only";

export const fetchWrapper = async (
  url: string,
  requestInit: RequestInit = {},
) => {
  //Cắm token
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const refreshToken = cookieStore.get("refreshToken")?.value;

  const headers = new Headers(requestInit.headers || {});
  if (accessToken) {
    headers.set(`Authorization`, `Bearer ${accessToken}`);
  }

  const options = {
    ...requestInit,
    headers,
  };

  const response = await fetch(url, options);
  if (response.status === 401) {
    const { data: newToken } = await requestRefreshToken(refreshToken!);
    if (newToken) {
    }
  }
  return response;
};
