import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import { Input, Button, Box, Label } from '../../components'
import ButtonLink from '../../components/ButtonLink'
import { updateTempoLocal, getTempoLocal } from './services/requests'

function TemposLocalEdicao() {
  const { id } = useParams()
  const [tempoLocal, setTempoLocal] = useState({
    nome: '',
  })

  const update = useCallback(async () => {
    await updateTempoLocal(id, tempoLocal)
  }, [tempoLocal, id])

  const change = useCallback(
    (field, value) => {
      setTempoLocal({ ...tempoLocal, [field]: value })
    },
    [tempoLocal]
  )

  const load = useCallback(async () => {
    const response = await getTempoLocal(id)
    if (response) {
      setTempoLocal(response)
    }
  }, [id])

  useEffect(() => {
    load()
  }, [load])

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
                value={tempoLocal.nome}
                onChange={(e) => change('nome', e.target.value)}
              />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col lg={{ offset: 9, size: 2 }}>
              <Button onClick={update}>Salvar</Button>
            </Col>
          </Row>
        </Box>
      </Container>
    </>
  )
}

export default TemposLocalEdicao
