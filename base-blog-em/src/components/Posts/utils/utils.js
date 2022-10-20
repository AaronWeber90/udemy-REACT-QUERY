import { BASEURL } from "../../../constants/global"

export const fetchPosts = async () => {
  const response = await fetch(`${BASEURL}posts?_limit=10&_page=0`)
  return response.json()
}
