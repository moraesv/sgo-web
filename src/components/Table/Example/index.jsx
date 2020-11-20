import React, { useMemo, useState } from 'react'

import { Table } from '../../../components'

import makeData from '../services/make-data'
import { Container } from 'reactstrap'
import colors from '../../../utils/colors'

const serverData = makeData(1000)

function Teste() {
  const columns = useMemo(
    () => [
      {
        Header: 'First Name',
        accessor: 'firstName',
        disableSortBy: true,
        style: {
          color: colors.dark,
        },
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
      },

      {
        Header: 'Age',
        accessor: 'age',
      },
      {
        Header: 'Visits',
        accessor: 'visits',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'Profile Progress',
        accessor: 'progress',
      },
    ],
    []
  )

  const [data] = useState(serverData.slice(0, 10))
  /*   const [loading, setLoading] = useState(false)
  const [pageCount, setPageCount] = useState(0)
  const [selectedRows, setSelectedRows] = useState([])
  const fetchIdRef = React.useRef(0) */

  /* const fetchData = React.useCallback(({ pageSize, pageIndex, sortBy }) => {
    const fetchId = ++fetchIdRef.current

    setLoading(true)

    setTimeout(() => {
      if (fetchId === fetchIdRef.current) {
        if (pageSize) {
          const startRow = pageSize * pageIndex
          const endRow = startRow + pageSize
          setData(serverData.slice(startRow, endRow))

          setPageCount(Math.ceil(serverData.length / pageSize))
        } else {
          setData(serverData)
        }

        setLoading(false)
      }
    }, 1000)
  }, [])
 */
  return (
    <Container className="py-5">
      <Table
        columns={columns}
        data={data}
        /*  hasSelect={false}
        hasPagination={false}
        hasSortBy={false} */
        /* selectAll={false} */
        /* onSelect={setSelectedRows} */
        /* pageCount={pageCount}
        fetchData={fetchData}
        loading={loading} */
      />
      {/*   {JSON.stringify(selectedRows)} */}
    </Container>
  )
}

export default Teste
