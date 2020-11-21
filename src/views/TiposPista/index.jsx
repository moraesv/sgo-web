import React, { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import { Input, Button, Table } from '../../components'
import ButtonLink from '../../components/ButtonLink'
import { getTiposPista, updateTipoPista } from './services/requests'
import useCreateTableColumns from './services/useCreateTableColumns'

function TiposPista() {
  const history = useHistory()
  const [tiposPista, setTiposPista] = useState([])

  const load = useCallback(async () => {
    const response = await getTiposPista()
    if (response) {
      setTiposPista(response)
    }
  }, [])

  const update = useCallback(
    async (id, data) => {
      await updateTipoPista(id, data)
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
            <ButtonLink outlined variant="blue" to="/tipos-pista/novo">
              Novo
            </ButtonLink>
          </Col>
        </Row>

        <Table className="mt-5" columns={columns} data={tiposPista} />
      </Container>
    </>
  )
}

export default TiposPista
