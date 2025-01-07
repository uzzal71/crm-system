import {
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { logout, setCredentials } from "../../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3001",
  credentials: "include",
  prepareHeaders: (headers, { getState }: any) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  let result = await baseQuery(args, api, extraOptions);

  if ((result.error as FetchBaseQueryError)?.status === 403) {
    console.log("Sending refresh token...");
    const refreshResult: any = await baseQuery(
      "/auth/refresh",
      api,
      extraOptions
    );
    if (refreshResult?.data) {
      const { accessToken, refreshToken } = refreshResult.data;
      const user = api.getState().auth.user;

      // Update credentials
      api.dispatch(setCredentials({ user, accessToken, refreshToken }));

      // Retry the original query
      result = await baseQuery(args, api, extraOptions);
    } else {
      console.log("Refresh token failed, logging out.");
      api.dispatch(logout());
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
