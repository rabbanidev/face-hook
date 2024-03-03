import { useEffect } from "react";
import api from "../api/axios";
import useAuth from "./useAuth";

export default function useAxios() {
  const { authToken, refreshToken, onAuth } = useAuth();

  useEffect(() => {
    // add a request interceptors
    const requestIntercept = api.interceptors.request.use(
      (config) => {
        if (authToken) {
          config.headers.Authorization = `Bearer ${authToken}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // add a response interceptors
    const responseIntercept = api.interceptors.response.use(
      (response) => {
        return response;
      },
      // If the error status is 401 and there is no originalRequest._retry flag,
      // it means the token has expired and we need to refresh it
      async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const resp = await api.post("/auth/refresh-token", {
              refreshToken,
            });

            const { token: newAuthToken } = resp.data;

            console.log("New Token:", newAuthToken);
            // Set new auth token in state
            onAuth({ authToken: newAuthToken });

            originalRequest.headers.Authorization = `Bearer ${newAuthToken}`;

            return api(originalRequest);
          } catch (error) {
            // Handle refresh token error or redirect to login
            return Promise.reject(error);
          }
        }

        return Promise.reject(error);
      }
    );

    // Clean up function
    return () => {
      api.interceptors.request.eject(requestIntercept);
      api.interceptors.response.eject(responseIntercept);
    };
  }, [authToken, onAuth, refreshToken]);

  return {
    api,
  };
}
