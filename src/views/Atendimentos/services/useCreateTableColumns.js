import React, { useMemo } from 'react'

import EditIcon from '../../../assets/icons/edit.svg'

export default function useCreateTableColumns({ history }) {
  return useMemo(
    () => [
      {
        Header: 'Funcional',
        accessor: 'oficial.funcional',
      },
      {
        Header: 'Oficial',
        accessor: 'oficial.nomeOficial',
      },
      {
        Header: 'Data',
        accessor: 'criadoEm',
      },
      {
        Header: 'Finalizado',
        accessor: 'finalizado',
        Cell: ({ value }) => {
          return value ? 'Sim' : 'Não'
        },
      },
      {
        Header: '',
        accessor: 'ativo',
        align: 'right',
        Cell: ({ row, value }) => {
          return (
            <>
              <button
                type="button"
                onClick={() => history.push(`/atendimentos/${row.original.id}`)}
                className="mr-1"
              >
                <img src={EditIcon} alt="" />
              </button>
            </>
          )
        },
      },
    ],
    [history]
  )
}
