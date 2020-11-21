import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import { Input, Button, Box, Label } from '../../components'
import ButtonLink from '../../components/ButtonLink'
import { createCaracteristicaLocal } from './services/requests'

function CaracteristicasLocalNovo() {
  const history = useHistory()
  const [caracteristicaLocal, setCaracteristicaLocal] = useState({
    nome: '',
  })

  const create = useCallback(async () => {
    const response = await createCaracteristicaLocal(caracteristicaLocal)

    if (response && response.id) {
      history.push(`/caracteristicas-local/${response.id}`)
    }
  }, [history, caracteristicaLocal])

  const change = useCallback(
    (field, value) => {
      setCaracteristicaLocal({ ...caracteristicaLocal, [field]: value })
    },
    [caracteristicaLocal]
  )

  return (
    <>
      <Container className="pb-7">
        <Row className="mt-5">
          <Col lg={2}>
            <ButtonLink variant="gray" to="/caracteristicas-local">
              Voltar
            </ButtonLink>
          </Col>
        </Row>

        <Box className="mt-5 py-5">
          <Row>
            <Col lg={{ offset: 1, size: 5 }}>
              <Label>Nome</Label>
              <Input
                required
                value={caracteristicaLocal.nome}
                onChange={(e) => change('nome', e.target.value)}
              />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col lg={{ offset: 9, size: 2 }}>
              <Button onClick={create}>Salvar</Button>
            </Col>
          </Row>
        </Box>
      </Container>
    </>
  )
}

export default CaracteristicasLocalNovo
