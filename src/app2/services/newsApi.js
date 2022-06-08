import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://atayde.herokuapp.com'

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({newsCategory, count}) => `${baseUrl}/cryptoNews/${newsCategory}/${count}`,
    }),
  }),
})

export const { useGetCryptoNewsQuery } = newsApi