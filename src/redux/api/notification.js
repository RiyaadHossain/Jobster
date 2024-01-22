import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const NOTIFICATION_API = "/notification";

export const notificationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllNotifications: builder.query({
      query: () => ({
        url: `${NOTIFICATION_API}`,
        method: "GET",
      }),
      providesTags: [tagTypes.notification],
    }),
    getUnReadItemsCount: builder.query({
      query: () => ({
        url: `${NOTIFICATION_API}/unread`,
        method: "GET",
      }),
      providesTags: [tagTypes.notification],
    }),
    markAsReadAll: builder.mutation({
      query: () => ({
        url: `${NOTIFICATION_API}/read-all`,
        method: "PATCH",
      }),
      invalidatesTags: [tagTypes.notification],
    }),
    deleteAllNotificaitons: builder.mutation({
      query: () => ({
        url: `${NOTIFICATION_API}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.notification],
    }),
    deleteNotificaiton: builder.mutation({
      query: (id) => ({
        url: `${NOTIFICATION_API}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.notification],
    }),
  }),
});

export const {
  useGetAllNotificationsQuery,
  useGetUnReadItemsCountQuery,
  useMarkAsReadAllMutation,
  useDeleteAllNotificaitonsMutation,
  useDeleteNotificaitonMutation,
} = notificationApi;
