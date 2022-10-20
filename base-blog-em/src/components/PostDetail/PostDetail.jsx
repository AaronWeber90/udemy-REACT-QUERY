import { useQuery } from "react-query"

import { fetchComments } from "./utils/utils"

export function PostDetail({ post }) {
  const { id, title, body } = post

  const {
    data: commentsData,
    isLoading: isCommentsDataLoading,
    isError: isCommentsDataError,
    error: commentsDataError,
  } = useQuery(["comments", post.id], () => fetchComments(id))

  if (isCommentsDataLoading) {
    return <p>Loading...</p>
  }

  if (isCommentsDataError) {
    return (
      <>
        <p>Something went wrong!</p>
        <p>{commentsDataError.toString()}</p>
      </>
    )
  }

  return (
    <>
      <h3 style={{ color: "blue" }}>{title}</h3>
      <button>Delete</button> <button>Update title</button>
      <p>{body}</p>
      <h4>Comments</h4>
      {commentsData?.map(({ id, email, body }) => (
        <li key={id}>
          {email}: {body}
        </li>
      ))}
    </>
  )
}
