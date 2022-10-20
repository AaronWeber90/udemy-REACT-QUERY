import { useEffect } from "react"
import { useQueryClient } from "react-query"
import { fetchPosts } from "../utils/utils"

export const useRefetchNextPage = (currentPage) => {
  const queryClient = useQueryClient()

  useEffect(() => {
    const nextPage = currentPage + 1
    queryClient.prefetchQuery(["posts", nextPage], () => fetchPosts(nextPage))
  }, [currentPage])
}
