import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import { Input, Button, Box, Label } from '../../components'
import ButtonLink from '../../components/ButtonLink'
import { updateOficial, getOficial } from './services/requests'

function OficiaisEdicao() {
  const { id } = useParams()
  const [oficial, setOficial] = useState({})

  const update = useCallback(async () => {
    await updateOficial(id, oficial)
  }, [oficial, id])

  const change = useCallback(
    (field, value) => {
      setOficial({ ...oficial, [field]: value })
    },
    [oficial]
  )

  const load = useCallback(async () => {
    const response = await getOficial(id)
    if (response) {
      setOficial(response)
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
              <Input type="password" disabled defaultValue={'.........'} />
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

export default OficiaisEdicao
