const BASE_URL = `https://api.escuelajs.co/api/v1`;
export const getAccessToken = () => {
  const accessToken = localStorage.getItem("access_token");
  return accessToken;
};
export const getRefreshToken = () => {
  const refreshToken = localStorage.getItem("refresh_token");
  return refreshToken;
};
export const removeToken = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
};
export const saveToken = (token) => {
  localStorage.setItem("access_token", token.access_token);
  localStorage.setItem("refresh_token", token.refresh_token);
};
export const logout = () => {
  removeToken();
  window.location.href = "ex01.html";
};

export const getNewToken = async () => {
  try {
    const refreshToken = getRefreshToken();
    const response = await fetch(`${BASE_URL}/auth/refresh-token`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ refreshToken }),
    });
    if (!response.ok) {
      throw new Error("Refresh token failed");
    }
    const data = await response.json();
    return data;
  } catch {
    return false;
  }
};
