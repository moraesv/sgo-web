import React from 'react'

import {
  NextButton,
  PageButton,
  PaginationStyle,
  PreviousButton,
  Bullets,
  PaginationWrapper,
} from './styles'

function Pagination({
  gotoPage,
  previousPage,
  canPreviousPage,
  nextPage,
  pageCount,
  canNextPage,
  pageIndex,
}) {
  return (
    <PaginationWrapper>
      <PaginationStyle>
        <PreviousButton
          aria-label="Página anterior"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        />
        {pageCount > 5 ? (
          <>
            {[...Array(pageCount)].map((_, key) => {
              if (pageIndex < 5 && key < 5) {
                return (
                  <PageButton
                    active={key === pageIndex}
                    key={key}
                    aria-label={`Ir para a página ${pageIndex + 1}`}
                    onClick={() => gotoPage(key)}
                  >
                    {key + 1}
                  </PageButton>
                )
              } else if (
                pageIndex > 4 &&
                key >
                  pageIndex -
                    (pageIndex === pageCount - 2
                      ? 6
                      : pageIndex === pageCount - 1
                      ? 7
                      : 5) &&
                key <= pageIndex
              ) {
                return (
                  <PageButton
                    active={key === pageIndex}
                    key={key}
                    aria-label={`Ir para a página ${pageIndex + 1}`}
                    onClick={() => gotoPage(key)}
                  >
                    {key + 1}
                  </PageButton>
                )
              } else {
                return null
              }
            })}

            {pageIndex < pageCount - 2 ? <Bullets /> : null}

            {pageIndex < pageCount - 1 ? (
              <PageButton
                active={pageCount - 1 === pageIndex}
                aria-label={`Ir para a página ${pageCount}`}
                onClick={() => gotoPage(pageCount - 1)}
              >
                {pageCount}
              </PageButton>
            ) : null}
          </>
        ) : (
          [...Array(pageCount)].map((a, key) => {
            return (
              <PageButton
                active={key === pageIndex}
                key={key}
                aria-label={`Ir para a página ${pageIndex + 1}`}
                onClick={() => gotoPage(key)}
              >
                {key + 1}
              </PageButton>
            )
          })
        )}
        <NextButton
          aria-label="Próxima página"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        />
      </PaginationStyle>
    </PaginationWrapper>
  )
}

export default Pagination
