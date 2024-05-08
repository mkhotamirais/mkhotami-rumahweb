import { apiSlice } from "./apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({ url: `/user` }),
      transformResponse: (res) => res.data,
      providesTags: ["User"],
      keepUnusedDataFor: 5,
    }),
    getUserById: builder.query({
      query: (id) => `/user/${id}`,
      transformResponse: (res) => res.data,
      providesTags: ["User"],
      keepUnusedDataFor: 5,
    }),
    postUser: builder.mutation({
      query: (body) => ({ url: `/user`, method: "POST", body }),
      invalidatesTags: ["User"],
    }),
    updateUser: builder.mutation({
      query: (body) => ({ url: `/user/${body.id}`, method: "PATCH", body }),
      invalidatesTags: ["User"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({ url: `/user/${id}`, method: "DELETE" }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery, usePostUserMutation, useUpdateUserMutation, useDeleteUserMutation } =
  userApiSlice;
