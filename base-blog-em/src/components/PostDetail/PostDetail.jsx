import { useQuery, useMutation } from "react-query"
import { LoadingComponent } from "../LoadingComponent/LoadingComponent"

import { deletePost, fetchComments, updatePost } from "./utils/utils"

export function PostDetail({ post }) {
  const { id, title, body } = post

  const {
    data: commentsData,
    isLoading: isCommentsDataLoading,
    isError: isCommentsDataError,
    error: commentsDataError,
  } = useQuery(["comments", post.id], () => fetchComments(id))

  const deleteMutation = useMutation((postId) => deletePost(postId))

  const updateMutation = useMutation((postId) => updatePost(postId))

  if (isCommentsDataLoading) {
    return <LoadingComponent />
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
      <button onClick={() => deleteMutation.mutate(id)}>Delete</button>{" "}
      {deleteMutation.isError && <p>Error when deleting post.</p>}
      {deleteMutation.isLoading && <p>Deleting the post.</p>}
      {deleteMutation.isSuccess && <p>Post has been deleted.</p>}
      <button onClick={() => updateMutation.mutate(id)}>Update title</button>
      {updateMutation.isSuccess && <p>Post has been updated.</p>}
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
