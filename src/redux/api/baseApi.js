import { createApi } from '@reduxjs/toolkit/query/react'
import { baseUrl } from "@/config/envConfig";
import { tagTypesArray } from "../tagTypes";
import { axiosBaseQuery } from '@/config/axios/axiosBaseQuery';

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: axiosBaseQuery({ baseUrl }),
  endpoints: () => ({}),
  tagTypes: tagTypesArray,
});

