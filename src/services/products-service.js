import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
    endpoints: (build) => ({
            fetchProducts: build.query({
                query: () => ({
                    url: `products`,
                    method: "GET",
                }),
                tagTypes:['products'],
                async onQueryStarted(
                    arg,
                    {
                      dispatch,
                      getState,
                      extra,
                      requestId,
                      queryFulfilled,
                      getCacheEntry,
                      updateCachedData,
                    }
                  ) {},
            }),
        

    })
  })

  export const { useFetchProductsQuery } = productsApi;