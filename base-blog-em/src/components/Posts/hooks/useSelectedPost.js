import { useState } from "react"

export const useSelectedPost = () => {
  const [selectedPost, setSelectedPost] = useState(null)

  return { selectedPost, setSelectedPost }
}
