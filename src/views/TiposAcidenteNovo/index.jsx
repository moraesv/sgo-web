import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import { Input, Button, Box, Label } from '../../components'
import ButtonLink from '../../components/ButtonLink'
import { createTipoAcidente } from './services/requests'

function TiposAcidenteNovo() {
  const history = useHistory()
  const [tipoAcidente, setTipoAcidente] = useState({
    nome: '',
  })

  const create = useCallback(async () => {
    const response = await createTipoAcidente(tipoAcidente)

    if (response && response.id) {
      history.push(`/tipos-acidente/${response.id}`)
    }
  }, [history, tipoAcidente])

  const change = useCallback(
    (field, value) => {
      setTipoAcidente({ ...tipoAcidente, [field]: value })
    },
    [tipoAcidente]
  )

  return (
    <>
      <Container className="pb-7">
        <Row className="mt-5">
          <Col lg={2}>
            <ButtonLink variant="gray" to="/tipos-acidente">
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
                value={tipoAcidente.nome}
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

export default TiposAcidenteNovo
