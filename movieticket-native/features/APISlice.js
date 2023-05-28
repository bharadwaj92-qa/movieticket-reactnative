import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
    endpoints: (builder) => ({
        getMovieById: builder.query({
            query: (id) => `movies/${id}`,
        }),
        getAllMovies: builder.query({
            query: () => `/movies`,
        }),
        getAllEvents: builder.query({
            query: () => `/events`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMovieByIdQuery, useGetAllMoviesQuery, useGetAllEventsQuery } = moviesApi