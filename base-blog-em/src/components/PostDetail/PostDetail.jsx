import { useQuery } from "react-query"

import { fetchComments } from "./utils/utils"

// async function deletePost(postId) {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/postId/${postId}`,
//     { method: "DELETE" }
//   )
//   return response.json()
// }

// async function updatePost(postId) {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/postId/${postId}`,
//     { method: "PATCH", data: { title: "REACT QUERY FOREVER!!!!" } }
//   )
//   return response.json()
// }

export function PostDetail({ post }) {
  const { id, title, body } = post

  const {
    data: commentsData,
    isLoading: isCommentsDataLoading,
    isError,
    error,
  } = useQuery(`postDetail-${post.id}`, () => fetchComments(id))

  if (isCommentsDataLoading) {
    return <p>Loading...</p>
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
