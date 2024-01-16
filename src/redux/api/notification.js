import { baseApi } from "./baseApi";

const NOTIFICATION_API = "/notification";

export const notificationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllNotifications: builder.query({
      query: () => ({
        url: `${NOTIFICATION_API}`,
        method: "GET",
      }),
    }),
    markAsRead: builder.mutation({
      query: () => ({
        url: `${NOTIFICATION_API}/read-all`,
        method: "PATCH",
      }),
    }),
    deleteAllNotificaitons: builder.mutation({
      query: () => ({
        url: `${NOTIFICATION_API}`,
        method: "DELETE",
      }),
    }),
    deleteNotificaiton: builder.mutation({
      query: (id) => ({
        url: `${NOTIFICATION_API}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllNotificationsQuery,
  useMarkAsReadMutation,
  useDeleteAllNotificaitonsMutation,
  useDeleteNotificaitonMutation,
} = notificationApi;
