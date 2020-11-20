import React from 'react'

import IndeterminateCheckbox from '../components/IndeterminateCheckbox'

export default function addSelectionColumn(hooks, selectAll, hasPagination) {
  hooks.visibleColumns.push((columns) => [
    {
      id: 'selection',
      width: '80px',
      disableSortBy: true,
      Header: ({
        getToggleAllRowsSelectedProps,
        getToggleAllPageRowsSelectedProps,
      }) =>
        selectAll ? (
          <IndeterminateCheckbox
            dark={false}
            {...(hasPagination
              ? getToggleAllPageRowsSelectedProps()
              : getToggleAllRowsSelectedProps())}
          />
        ) : null,
      Cell: ({ row }) => {
        return (
          <IndeterminateCheckbox
            {...row.getToggleRowSelectedProps()}
            onClick={(e) => {
              e.stopPropagation()
              if (row.getToggleRowSelectedProps().onClick)
                row.getToggleRowSelectedProps().onClick(e)
            }}
          />
        )
      },
    },
    ...columns,
  ])
}
