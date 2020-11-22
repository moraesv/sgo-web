import React, { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import { Input, Button, Table } from '../../components'
import ButtonLink from '../../components/ButtonLink'
import { getAtendimentos, updateAtendimento } from './services/requests'
import useCreateTableColumns from './services/useCreateTableColumns'

function Atendimentos() {
  const history = useHistory()
  const [atendimentos, setAtendimentos] = useState([])

  const load = useCallback(async () => {
    const response = await getAtendimentos()
    if (response) {
      setAtendimentos(response)
    }
  }, [])

  const update = useCallback(
    async (id, data) => {
      await updateAtendimento(id, data)
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
            <ButtonLink outlined variant="blue" to="/atendimentos/novo">
              Novo
            </ButtonLink>
          </Col>
        </Row>

        <Table className="mt-5" columns={columns} data={atendimentos} />
      </Container>
    </>
  )
}

export default Atendimentos
