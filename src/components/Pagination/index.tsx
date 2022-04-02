import * as React from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { usePagination, DOTS } from '../../hooks/usePagination'
import './styles.scss'
import cn from 'classnames'

interface Props {
  onPageChange(value: number): void
  totalCount: number
  siblingCount?: number
  currentPage: number
  pageSize: number
}

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}: Props) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  const lastPage = paginationRange[paginationRange.length - 1]

  return (
    <div>
      <ul>
        <button
          className="pagination-button"
          disabled={currentPage === 1}
          onClick={onPrevious}
        >
          <MdKeyboardArrowLeft />
        </button>
        {paginationRange.map((pageNumber, i) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber === DOTS) {
            return <li>&#8230;</li>
          }

          // Render our Page Pills
          return (
            <button
              className={cn(
                'pagination-button',
                currentPage === pageNumber && 'pagination-button-active'
              )}
              key={i}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          )
        })}
        {/*  Right Navigation arrow */}
        <button
          className="pagination-button"
          disabled={currentPage === lastPage}
          onClick={onNext}
        >
          <MdKeyboardArrowRight />
        </button>
      </ul>
    </div>
  )
}

export default Pagination
