import React, { useMemo } from 'react'

import EditIcon from '../../../assets/icons/edit.svg'
import BlockIcon from '../../../assets/icons/block.svg'
import ReloadIcon from '../../../assets/icons/reload.svg'

export default function useCreateTableColumns({ history, update }) {
  return useMemo(
    () => [
      {
        Header: 'Nome',
        accessor: 'nome',
      },
      {
        Header: 'Criado em',
        accessor: 'criadoEm',
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
                onClick={() =>
                  history.push(`/tipos-acidente/${row.original.id}`)
                }
                className="mr-1"
              >
                <img src={EditIcon} alt="" />
              </button>
              <button
                type="button"
                onClick={() => update(row.original.id, { ativo: !value })}
              >
                {row.original.ativo ? (
                  <img src={BlockIcon} alt="" />
                ) : (
                  <img src={ReloadIcon} alt="" />
                )}
              </button>
            </>
          )
        },
      },
    ],
    [history, update]
  )
}
