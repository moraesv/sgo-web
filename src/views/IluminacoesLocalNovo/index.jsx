import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import { Input, Button, Box, Label } from '../../components'
import ButtonLink from '../../components/ButtonLink'
import { createIluminacaoLocal } from './services/requests'

function IluminacoesLocalNovo() {
  const history = useHistory()
  const [iluminacaoLocal, setIluminacaoLocal] = useState({
    nome: '',
  })

  const create = useCallback(async () => {
    const response = await createIluminacaoLocal(iluminacaoLocal)

    if (response && response.id) {
      history.push(`/iluminacoes-local/${response.id}`)
    }
  }, [history, iluminacaoLocal])

  const change = useCallback(
    (field, value) => {
      setIluminacaoLocal({ ...iluminacaoLocal, [field]: value })
    },
    [iluminacaoLocal]
  )

  return (
    <>
      <Container className="pb-7">
        <Row className="mt-5">
          <Col lg={2}>
            <ButtonLink variant="gray" to="/iluminacoes-local">
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
                value={iluminacaoLocal.nome}
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

export default IluminacoesLocalNovo
