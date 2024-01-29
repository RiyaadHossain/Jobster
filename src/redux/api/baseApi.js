import { createApi } from '@reduxjs/toolkit/query/react'
import { tagTypesArray } from "../tagTypes";
import { axiosBaseQuery } from '@/config/axios/axiosBaseQuery';
import { BASE_URL } from '@/config/envConfig';

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: axiosBaseQuery({ baseUrl: BASE_URL }),
  endpoints: () => ({}),
  tagTypes: tagTypesArray,
});

