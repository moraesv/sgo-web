import React from 'react'

import { SortArrowStyle } from '../styles'
import ArrowDownIcon from '../../../assets/icons/arrow-down.svg'

function SortIcon({ hasSortBy, column }) {
  return (
    <span>
      {hasSortBy &&
        !column.hideSortIcon &&
        (column.isSorted ? (
          column.isSortedDesc ? (
            <SortArrowStyle src={ArrowDownIcon} alt="" aria-hidden={true} />
          ) : (
            <SortArrowStyle src={ArrowDownIcon} alt="" aria-hidden={true} />
          )
        ) : (
          !column.disableSortBy && (
            <SortArrowStyle src={ArrowDownIcon} alt="" aria-hidden={true} />
          )
        ))}
    </span>
  )
}

export default SortIcon
