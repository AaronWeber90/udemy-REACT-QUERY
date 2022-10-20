import { useEffect } from "react"
import { useQueryClient } from "react-query"
import { MAX_POST_PAGE } from "../../../constants/global"
import { fetchPosts } from "../utils/utils"

export const useRefetchNextPage = (currentPage) => {
  const queryClient = useQueryClient()

  useEffect(() => {
    const nextPage = currentPage + 1
    if (nextPage > MAX_POST_PAGE) return
    queryClient.prefetchQuery(["posts", nextPage], () => fetchPosts(nextPage))
  }, [currentPage, queryClient])
}
