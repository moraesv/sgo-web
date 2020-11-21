import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import { Input, Button, Box, Label } from '../../components'
import ButtonLink from '../../components/ButtonLink'
import { createOficial } from './services/requests'

function OficiaisNovo() {
  const history = useHistory()
  const [oficial, setOficial] = useState({
    nomeOficial: '',
    nomeUsuario: '',
    funcional: '',
    chapa: '',
  })

  const create = useCallback(async () => {
    const response = await createOficial(oficial)

    if (response && response.id) {
      history.push(`/oficiais/${response.id}`)
    }
  }, [history, oficial])

  const change = useCallback(
    (field, value) => {
      setOficial({ ...oficial, [field]: value })
    },
    [oficial]
  )

  return (
    <>
      <Container className="pb-7">
        <Row className="mt-5">
          <Col lg={2}>
            <ButtonLink variant="gray" to="/oficiais">
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
                value={oficial.nomeOficial}
                onChange={(e) => change('nomeOficial', e.target.value)}
              />
            </Col>
            <Col lg={{ offset: 1, size: 4 }}>
              <Label>Nome de usuário</Label>
              <Input
                value={oficial.nomeUsuario}
                onChange={(e) => change('nomeUsuario', e.target.value)}
              />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col lg={{ offset: 1, size: 2 }}>
              <Label>Chapa</Label>
              <Input
                type="number"
                value={oficial.chapa}
                onChange={(e) => change('chapa', e.target.value)}
              />
            </Col>
            <Col lg={{ offset: 1, size: 2 }}>
              <Label>Funcional</Label>
              <Input
                type="number"
                value={oficial.funcional}
                onChange={(e) => change('funcional', e.target.value)}
              />
            </Col>
            <Col lg={{ offset: 1, size: 4 }}>
              <Label>Senha</Label>
              <Input
                type="password"
                value={oficial.senha}
                onChange={(e) => change('senha', e.target.value)}
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

export default OficiaisNovo
