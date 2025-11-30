import { getAccessToken, getNewToken, logout, saveToken } from "./utils.js";
export const axiosInstance = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
});

//Cầu hình interceptor
axiosInstance.interceptors.request.use((config) => {
  const accessToken = getAccessToken();
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});
let refreshTokenPromise = null;
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.status === 401) {
      if (!refreshTokenPromise) {
        refreshTokenPromise = getNewToken();
      }
      const newToken = await refreshTokenPromise;
      //Nếu lấy token mới thất bại --> logout
      if (!newToken) {
        logout();
        return;
      }
      //Nếu lấy token mới thành công
      //1. Lưu token mới vào storage
      saveToken(newToken);
      //2. Gọi lại request bị failed
      return axiosInstance(error.config);
    }

    return Promise.reject(error);
  }
);
