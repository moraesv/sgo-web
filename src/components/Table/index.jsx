import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import {
  useFlexLayout,
  usePagination,
  useRowSelect,
  useSortBy,
  useTable,
} from 'react-table'

import {
  TableStyle,
  TableWrap,
  TBody,
  TBodyRow,
  TData,
  TDLoading,
  THead,
  THeader,
  THeadRow,
} from './styles'

import addSelectionColumn from './services/addSelectionColumn'
import getHeaderProps from './services/getHeaderProps'
import getCellProps from './services/getCellProps'

import Pagination from './components/Pagination'
import SortIcon from './components/SortIcon'

function Table({
  data,
  columns,
  hasHeader,
  hasSelect,
  hasPagination,
  hasSortBy,
  onSelect,
  selectAll,
  fetchData,
  loading,
  onClickRow,
  pageCount: controlledPageCount,
  pageSize: initialPageSize,
  sortBy: initialSortBy,
  ...props
}) {
  /*

  */
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    selectedFlatRows,
    state: { pageIndex, pageSize, sortBy },
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: 0,
        sortBy: hasSortBy && initialSortBy,
      },
      manualPagination: true,
      manualSortBy: true,
      pageCount: controlledPageCount,
      autoResetSortBy: false,
      autoResetPage: false,
    },
    useFlexLayout,
    hasSortBy && useSortBy,
    hasPagination && usePagination,
    hasSelect && useRowSelect,
    (hooks) => {
      hasSelect && addSelectionColumn(hooks, selectAll, hasPagination)
    }
  )

  useEffect(() => {
    hasSelect &&
      onSelect &&
      onSelect(selectedFlatRows.map((row) => row.original))
  }, [selectedFlatRows, hasSelect, onSelect])

  useEffect(() => {
    if (fetchData) fetchData({ pageIndex, pageSize, sortBy })
  }, [fetchData, pageIndex, pageSize, sortBy])

  return (
    <>
      <TableWrap {...props}>
        <TableStyle {...getTableProps()}>
          {hasHeader && (
            <THead>
              {headerGroups.map((headerGroup) => (
                <THeadRow {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <THeader {...getHeaderProps(column, hasSortBy)}>
                      {column.render('Header')}
                      <SortIcon hasSortBy={hasSortBy} column={column} />
                    </THeader>
                  ))}
                </THeadRow>
              ))}
            </THead>
          )}
          <TBody {...getTableBodyProps()}>
            {(hasPagination ? page : rows).map((row) => {
              prepareRow(row)
              return (
                <TBodyRow
                  {...row.getRowProps()}
                  onClick={onClickRow ? () => onClickRow(row) : null}
                  hasClick={!!onClickRow}
                >
                  {row.cells.map((cell) => {
                    return (
                      <TData {...getCellProps(cell)}>
                        {cell.render('Cell')}
                      </TData>
                    )
                  })}
                </TBodyRow>
              )
            })}
            {loading && (
              <TBodyRow>
                <TDLoading colSpan="10000">Carregando...</TDLoading>
              </TBodyRow>
            )}
          </TBody>
        </TableStyle>
      </TableWrap>
      {hasPagination && (
        <Pagination
          {...{
            gotoPage,
            previousPage,
            canPreviousPage,
            nextPage,
            pageCount,
            canNextPage,
            pageOptions,
            pageIndex,
            pageSize,
          }}
        />
      )}
    </>
  )
}

Table.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  columns: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.arrayOf(PropTypes.object),
  hasHeader: PropTypes.bool,
  hasSelect: PropTypes.bool,
  selectAll: PropTypes.bool,
  onSelect: PropTypes.func,
  hasPagination: PropTypes.bool,
  hasSortBy: PropTypes.bool,
  pageCount: PropTypes.number,
  pageSize: PropTypes.number,
  sortBy: PropTypes.array,
}

Table.defaultProps = {
  selectAll: true,
  hasHeader: true,
  hasSelect: false,
  hasPagination: false,
  hasSortBy: false,
  pageCount: 0,
  pageSize: 10,
  sortBy: [],
}

export default Table
