import React, { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import { Input, Button, Table } from '../../components'
import ButtonLink from '../../components/ButtonLink'
import {
  getCaracteristicasLocal,
  updateCaracteristicaLocal,
} from './services/requests'
import useCreateTableColumns from './services/useCreateTableColumns'

function CaracteristicasLocal() {
  const history = useHistory()
  const [caracteristicasLocal, setCaracteristicasLocal] = useState([])

  const load = useCallback(async () => {
    const response = await getCaracteristicasLocal()
    if (response) {
      setCaracteristicasLocal(response)
    }
  }, [])

  const update = useCallback(
    async (id, data) => {
      await updateCaracteristicaLocal(id, data)
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
            <ButtonLink
              outlined
              variant="blue"
              to="/caracteristicas-local/novo"
            >
              Novo
            </ButtonLink>
          </Col>
        </Row>

        <Table className="mt-5" columns={columns} data={caracteristicasLocal} />
      </Container>
    </>
  )
}

export default CaracteristicasLocal
