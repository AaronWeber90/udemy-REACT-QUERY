import { BASEURL } from "../../../constants/global"

export const fetchComments = async (postId) => {
  const response = await fetch(`${BASEURL}comments?postId=${postId}`)
  return response.json()
}

export const deletePost = async (postId) => {
  const response = await fetch(`${BASEURL}posts/${postId}`, {
    method: "DELETE",
  })
  return response.json()
}

export const updatePost = async (postId) => {
  const response = await fetch(`${BASEURL}posts/${postId}`, {
    method: "PATCH",
    data: { title: "REACT QUERY FOREVER!!!!" },
  })
  return response.json()
}
