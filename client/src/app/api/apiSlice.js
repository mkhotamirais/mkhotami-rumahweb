import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    // baseUrl: import.meta.env.VITE_BASEURL,
    // baseUrl: "https://api1.mkhotamirais.my.id/api/mysql",
    baseUrl: "http://localhost:5000/api/mysql",
    // credentials: "include",
    // prepareHeaders: (headers, { getState }) => {
    //   const token = getState().auth.token;
    //   if (token) {
    //     headers.set("authorization", `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  }),
  tagTypes: ["User"],
  endpoints: () => ({}),
});
