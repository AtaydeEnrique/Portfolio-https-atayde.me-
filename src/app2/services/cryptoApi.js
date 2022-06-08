import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://atayde.herokuapp.com'

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => `${baseUrl}/cryptos/${count}`,
    }),
    getCryptoStats: builder.query({
      query: () => `${baseUrl}/cryptoStats`,
    }),
    getOneCrypto: builder.query({
      query: (id) => `${baseUrl}/crypto/${id}`,
    }),
    getCryptoHistory: builder.query({
      query: ({coinId,timePeriod}) => `${baseUrl}/crypto/${coinId}/${timePeriod}`
  }),
  }),
})

export const { useGetCryptosQuery, useGetCryptoStatsQuery, useGetOneCryptoQuery, useGetCryptoHistoryQuery } = cryptoApi