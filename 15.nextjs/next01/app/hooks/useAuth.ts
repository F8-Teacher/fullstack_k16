import { useEffect, useState } from "react";
import { getCurrentUser } from "../(main)/_actions/auth.action";
import { usePathname } from "next/navigation";

export const useAuth = () => {
  const [user, setUser] = useState(
    {} as {
      id: number;
      name: string;
      email: string;
    },
  );
  const [isLoading, setLoading] = useState(true);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  // const pathname = usePathname();
  useEffect(() => {
    const getUser = async () => {
      const currentUser = await getCurrentUser();
      if (!currentUser) {
        setAuthenticated(false);
        setLoading(false);
        return;
      }
      setUser(currentUser.data);
      setAccessToken(currentUser.accessToken);
      setAuthenticated(true);
      setLoading(false);
    };
    getUser();
  }, []);
  return { user, isLoading, isAuthenticated, accessToken };
};
