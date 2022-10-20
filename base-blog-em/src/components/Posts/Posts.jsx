import { useQuery } from "react-query"

import { PostDetail } from "../PostDetail/PostDetail"
import { useCurrentPage } from "./hooks/useCurrentPage"
import { useSelectedPost } from "./hooks/useSelectedPost"
import { fetchPosts } from "./utils/utils"

export function Posts() {
  const { currentPage, setCurrentPage } = useCurrentPage()
  const { selectedPost, setSelectedPost } = useSelectedPost()

  const { data, isLoading, isError, error } = useQuery(
    "posts",
    () => fetchPosts(),
    { staleTime: 3000 }
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
          disabled
          onClick={() => {}}
        >
          Previous page
        </button>
        <span>Page {currentPage + 1}</span>
        <button
          disabled
          onClick={() => {}}
        >
          Next page
        </button>
      </div>
      <hr />
      {selectedPost && <PostDetail post={selectedPost} />}
    </>
  )
}
