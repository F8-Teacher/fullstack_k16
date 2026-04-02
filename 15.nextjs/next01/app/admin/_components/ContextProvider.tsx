"use client";

import { createContext, useState } from "react";
type AppContextType = {
  message: string;
  setMessage: (value: string) => void;
};
export const AppContext = createContext<AppContextType>({} as AppContextType);
export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [message, setMessage] = useState<string>("");

  return <AppContext value={{ message, setMessage }}>{children}</AppContext>;
}
