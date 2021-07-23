import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const DOGS_API_KEY = "8075190b-f746-484b-b630-3b20fa55d96d";

// * Object Struture
// const breed = {
//     id: '',
//     name: '',
//     image: {
//         url: '',
//     }
// }

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thedogapi.com/v1",
    prepareHeaders(headers) {
      headers.set("x-api-key", DOGS_API_KEY);
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchBreeds: builder.query({
        query(limit = 10) {
          return `/breeds?limit=${limit}`;
        },
      }),
    };
  },
});

export const { useFetchBreedsQuery } = apiSlice;
