import { useState } from "react"

export const useCurrentPage = () => {
  const [currentPage, setCurrentPage] = useState(1)

  return { currentPage, setCurrentPage }
}
