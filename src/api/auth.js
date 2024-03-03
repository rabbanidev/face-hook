import api from "./axios";

export const login = async (payload) => {
  const res = await api.post("/auth/login", payload);
  return res;
};

export const getRefreshToken = async (refreshToken) => {
  const res = await api.post("/auth/refresh-token", {
    refreshToken: refreshToken,
  });
  return res;
};
