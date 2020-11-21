import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import { Input, Button, Box, Label } from '../../components'
import ButtonLink from '../../components/ButtonLink'
import { createFormaSinalizacao } from './services/requests'

function FormasSinalizacaoNovo() {
  const history = useHistory()
  const [formaSinalizacao, setFormaSinalizacao] = useState({
    nome: '',
  })

  const create = useCallback(async () => {
    const response = await createFormaSinalizacao(formaSinalizacao)

    if (response && response.id) {
      history.push(`/formas-sinalizacao/${response.id}`)
    }
  }, [history, formaSinalizacao])

  const change = useCallback(
    (field, value) => {
      setFormaSinalizacao({ ...formaSinalizacao, [field]: value })
    },
    [formaSinalizacao]
  )

  return (
    <>
      <Container className="pb-7">
        <Row className="mt-5">
          <Col lg={2}>
            <ButtonLink variant="gray" to="/formas-sinalizacao">
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
                value={formaSinalizacao.nome}
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

export default FormasSinalizacaoNovo
