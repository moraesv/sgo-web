import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import { Input, Button, Box, Label } from '../../components'
import ButtonLink from '../../components/ButtonLink'
import { createTipoPista } from './services/requests'

function TiposPistaNovo() {
  const history = useHistory()
  const [TipoPista, setTipoPista] = useState({
    nome: '',
  })

  const create = useCallback(async () => {
    const response = await createTipoPista(TipoPista)

    if (response && response.id) {
      history.push(`/tipos-pista/${response.id}`)
    }
  }, [history, TipoPista])

  const change = useCallback(
    (field, value) => {
      setTipoPista({ ...TipoPista, [field]: value })
    },
    [TipoPista]
  )

  return (
    <>
      <Container className="pb-7">
        <Row className="mt-5">
          <Col lg={2}>
            <ButtonLink variant="gray" to="/tipos-pista">
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
                value={TipoPista.nome}
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

export default TiposPistaNovo
