import { useState } from "react"

export const useCurrentPage = () => {
  const [currentPage, setCurrentPage] = useState(0)

  return { currentPage, setCurrentPage }
}
