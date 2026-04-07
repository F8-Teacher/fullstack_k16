export const requestLogin = async (loginData: {
  email: string;
  password: string;
}) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_API}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      },
    );
    if (!response.ok) {
      throw new Error("Email or password failed");
    }
    return response.json();
  } catch {
    return false;
  }
};

export const getUser = async (accessToken: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_API}/auth/me`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    if (!response.ok) {
      throw new Error("Unathorize");
    }
    return response.json();
  } catch {
    return false;
  }
};

export const requestRefreshToken = async (refreshToken: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_API}/auth/refresh-token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refreshToken }),
      },
    );
    if (!response.ok) {
      throw new Error("Refresh token failed");
    }
    return response.json();
  } catch {
    return false;
  }
};
