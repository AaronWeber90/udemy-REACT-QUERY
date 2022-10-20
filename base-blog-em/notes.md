# Notes & transcript

## 12 - Query Keys

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
