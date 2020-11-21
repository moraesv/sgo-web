import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import { Input, Button, Box, Label } from '../../components'
import ButtonLink from '../../components/ButtonLink'
import { createStatusSemaforo } from './services/requests'

function StatusSemaforoNovo() {
  const history = useHistory()
  const [statusSemaforo, setStatusSemaforo] = useState({
    nome: '',
  })

  const create = useCallback(async () => {
    const response = await createStatusSemaforo(statusSemaforo)

    if (response && response.id) {
      history.push(`/status-semaforo/${response.id}`)
    }
  }, [history, statusSemaforo])

  const change = useCallback(
    (field, value) => {
      setStatusSemaforo({ ...statusSemaforo, [field]: value })
    },
    [statusSemaforo]
  )

  return (
    <>
      <Container className="pb-7">
        <Row className="mt-5">
          <Col lg={2}>
            <ButtonLink variant="gray" to="/status-semaforo">
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
                value={statusSemaforo.nome}
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

export default StatusSemaforoNovo
