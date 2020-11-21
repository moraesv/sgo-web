import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import { Input, Button, Box, Label } from '../../components'
import ButtonLink from '../../components/ButtonLink'
import { createTempoLocal } from './services/requests'

function TemposLocallNovo() {
  const history = useHistory()
  const [tempoLocal, setTempoLocal] = useState({
    nome: '',
  })

  const create = useCallback(async () => {
    const response = await createTempoLocal(tempoLocal)

    if (response && response.id) {
      history.push(`/tempos-local/${response.id}`)
    }
  }, [history, tempoLocal])

  const change = useCallback(
    (field, value) => {
      setTempoLocal({ ...tempoLocal, [field]: value })
    },
    [tempoLocal]
  )

  return (
    <>
      <Container className="pb-7">
        <Row className="mt-5">
          <Col lg={2}>
            <ButtonLink variant="gray" to="/tempos-local">
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
                value={tempoLocal.nome}
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

export default TemposLocallNovo
