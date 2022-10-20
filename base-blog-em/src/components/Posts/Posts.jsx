import { useQuery } from "react-query"

import { PostDetail } from "../PostDetail/PostDetail"

import { useCurrentPage } from "./hooks/useCurrentPage"
import { useRefetchNextPage } from "./hooks/useRefetchNextPage"
import { useSelectedPost } from "./hooks/useSelectedPost"
import { fetchPosts } from "./utils/utils"
import { MAX_POST_PAGE } from "../../constants/global"

export function Posts() {
  const { currentPage, setCurrentPage } = useCurrentPage()
  const { selectedPost, setSelectedPost } = useSelectedPost()

  const RefetchNextPage = useRefetchNextPage(currentPage)

  const { data, isLoading, isError, error } = useQuery(
    ["posts", currentPage],
    () => fetchPosts(currentPage),
    { staleTime: 3000, keepPreviousData: true, useErrorBoundary: true }
  )

  if (isLoading) {
    return <h3>Is Loading...</h3>
  }

  if (isError) {
    return (
      <>
        <h3>Something went wrong!</h3>
        <p>{error.toString()}</p>
      </>
    )
  }

  return (
    <>
      <ul>
        {data?.map((post) => (
          <li
            key={post.id}
            className="post-title"
            onClick={setSelectedPost.bind(this, post)}
          >
            {post.title}
          </li>
        ))}
      </ul>
      <div className="pages">
        <button
          disabled={currentPage <= 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous page
        </button>
        <span>Page {currentPage}</span>
        <button
          disabled={currentPage >= MAX_POST_PAGE}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next page
        </button>
      </div>
      <hr />
      {selectedPost && <PostDetail post={selectedPost} />}
    </>
  )
}
