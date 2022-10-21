# About this project

My motivation for this udemy based project, was to combine React query and best practices especially from Bodgans Adrians [React Tips And Tricks](https://payhip.com/b/j7ngw) and create a more complex app from it.

# Notes & transcript

## 12 - [Query Keys](https://tanstack.com/query/v4/docs/guides/query-keys)

### Array as query key

- Pass array as a query string, not just a string

- Treat the query key like a dependency array -> when key changes, create new query

- Query function values should be part of the key

## 13 - Pagination

- Track current page in compnent state `currentPage`

- Use query keys that inlcude the page number `["posts", currentPage]`

- User clicks "next page" or "previous page" button
  - update `currentPage` state
  - fire off new query

## 14 - Prefetching

### Prefetch

- adds data to cache
- automatically stale (confiurable)
- shows while re-fetching, as long as the cache hasn't expired!

### Prefetching can be used for any anticipated data needs

- not just pagination!

### Combination with pagination

- Add page number to query key and query function

- Prefetching with `queryClient.prefetchQuery(["posts", nextPage], () => fetchPosts(nextPage))`

- Add `keepPreviousData:true` to query options

## 15 - isLoading vs isFetching

- **isFetching:** the async query function hasn't resolved yet

- **isLoading:** no chached data + isFetching

## 16 - [Mutations](https://tanstack.com/query/v4/docs/guides/mutations)

- Mutations: making a network call that changes data on the server

- Possibilites to show the changed data:
  - Optimistic updates
  - Update React Query cache with data returned from the server
  - Trigger re-fetch of relevent data (invalidation)

### useMutation

- Similar to useQuery, but:
  - return a mutate function
  - no query key needed
  - `isLoading` but no `isFetching`
  - by default, no retries (configurable)

## Error Handling

[React query error handling](https://tkdodo.eu/blog/react-query-error-handling)

[Kent C. Dodds - error boundary docs](https://kentcdodds.com/blog/use-react-error-boundary-to-handle-errors-in-react#react-error-boundary)

[Kent C. Dodds - error boundary npm](https://www.npmjs.com/package/react-error-boundary)
