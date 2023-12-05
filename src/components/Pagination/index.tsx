import React, { useState, useEffect } from 'react'
import * as S from './styles'

interface PaginationProps {
  currentPage: number
  totalItems: number
  itemsPerPage: number
  onPageChange: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange
}) => {
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(false)

  useEffect(() => {
    setShowLeftArrow(currentPage > 1)
    const totalPages = Math.ceil(totalItems / itemsPerPage)

    setShowRightArrow(currentPage < totalPages)
  }, [currentPage, totalItems, itemsPerPage])

  const handlePageChange = (page: number) => {
    onPageChange(page)
  }

  const goToPrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1)
    }
  }

  const goToNextPage = () => {
    const totalPages = Math.ceil(totalItems / itemsPerPage)
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1)
    }
  }

  if (totalItems <= itemsPerPage || totalItems === 0) {
    return null
  }

  return (
    <S.PaginationContainer>
      <S.PaginationButton onClick={goToPrevPage} disabled={!showLeftArrow}>
        {'<'}
      </S.PaginationButton>
      <span>Página {currentPage}</span>
      <S.PaginationButton onClick={goToNextPage} disabled={!showRightArrow}>
        {'>'}
      </S.PaginationButton>
    </S.PaginationContainer>
  )
}

export default Pagination
