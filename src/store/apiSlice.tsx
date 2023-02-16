import { createApi, fetchBaseQuery }  from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'store',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => '/todos',
    }),
    addTodo: builder.mutation({
      query: (todo) => ({
        url: '/todos',
        method: 'POST',
        body: todo
      })
    }),
    editTodo: builder.mutation({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: 'PATCH',
        body: todo
      })
    }),
    deleteTodo: builder.mutation({
      query: ({ id }) => ({
        url: `/todos/${id}`,
        method: 'DELETE',
        body: id
      })
    }),
  })
})

export const { useGetTodosQuery, useAddTodoQuery, useEditTodoQuery, useDeleteTodoQuery } = apiSlice
