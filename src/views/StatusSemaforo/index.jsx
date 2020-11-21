import React, { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import { Input, Button, Table } from '../../components'
import ButtonLink from '../../components/ButtonLink'
import { getStatusSemaforo, updateStatusSemaforo } from './services/requests'
import useCreateTableColumns from './services/useCreateTableColumns'

function StatusSemaforo() {
  const history = useHistory()
  const [statusSemaforo, setStatusSemaforo] = useState([])

  const load = useCallback(async () => {
    const response = await getStatusSemaforo()
    if (response) {
      setStatusSemaforo(response)
    }
  }, [])

  const update = useCallback(
    async (id, data) => {
      await updateStatusSemaforo(id, data)
      await load()
    },
    [load]
  )

  useEffect(() => {
    load()
  }, [load])

  const columns = useCreateTableColumns({ history, update })

  return (
    <>
      <Container className="pb-7">
        <Row className="mt-5">
          <Col lg={8}>
            <Input placeholder="Pesquise" />
          </Col>
          <Col lg={2}>
            <Button outlined variant="blue" onClick={load}>
              Pesquisar
            </Button>
          </Col>
          <Col lg={2}>
            <ButtonLink outlined variant="blue" to="/status-semaforo/novo">
              Novo
            </ButtonLink>
          </Col>
        </Row>

        <Table className="mt-5" columns={columns} data={statusSemaforo} />
      </Container>
    </>
  )
}

export default StatusSemaforo
