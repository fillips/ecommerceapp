import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const loginApi = createApi({
    reducerPath: 'loginApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
    endpoints: (build) => ({
            fetchLoginToken: build.mutation({
                query: (value) => ({
                    url: `auth/login`,
                    method: "POST",
                    body: value,
                }),
                tagTypes:['token'],
                async onQueryStarted(
                    arg,
                    { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }
                  ) {},
            }),
        

    })
  })

  export const { useFetchLoginTokenMutation } = loginApi;