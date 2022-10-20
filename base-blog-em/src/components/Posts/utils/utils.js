import { BASEURL } from "../../../constants/global"

export const fetchPosts = async (currentPage) => {
  const response = await fetch(`${BASEURL}posts?_limit=10&_page=${currentPage}`)
  return response.json()
}
