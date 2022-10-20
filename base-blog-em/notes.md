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
