"use client";

import { useAuth } from "@/app/hooks/useAuth";
import { createContext, useEffect } from "react";
import { getToken, removeToken, saveToken } from "../_actions/auth.action";
import { decodeJwt } from "jose";
import { requestRefreshToken } from "@/services/auth.service";
type AuthContextType = {
  user: {
    id: number;
    name: string;
    email: string;
  };
  accessToken?: string;
  isLoading: boolean;
  isAuthenticated: boolean;
};

export const AuthProvider = ({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) => {
  const { isLoading, isAuthenticated, user, accessToken } = useAuth();
  // const router = useRouter();
  useEffect(() => {
    const syncToken = async () => {
      const { accessToken, refreshToken } = await getToken();
      if (!accessToken || !refreshToken) {
        return;
      }
      const { exp } = decodeJwt(accessToken as string);
      const now = Date.now() / 1000;
      console.log(`Đang check token`);

      if (exp! - now <= 60) {
        //Cần phải refresh
        // console.log(`Cần phải refresh`);
        const newToken = await requestRefreshToken(refreshToken!);
        // console.log(newToken);
        if (!newToken) {
          await removeToken();
          window.location.reload();
          return;
        }
        saveToken(newToken.data);
      }
    };
    const id = setInterval(syncToken, 5000);
    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated,
        accessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType,
);
