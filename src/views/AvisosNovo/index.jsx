import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import { Input, Button, Box, Label, Textarea } from '../../components'
import ButtonLink from '../../components/ButtonLink'
import { createAviso } from './services/requests'

function AvisosNovo() {
  const history = useHistory()
  const [aviso, setAviso] = useState({
    titulo: '',
    inicio: '',
    fim: '',
    descricao: '',
  })

  const create = useCallback(async () => {
    function formatDate(value) {
      var datePart = value.match(/\d+/g),
        year = datePart[0].substring(2),
        month = datePart[1],
        day = datePart[2]

      return month + '/' + day + '/' + year + ' 03:00'
    }

    const inicio = new Date(formatDate(aviso.inicio))
    const fim = new Date(formatDate(aviso.fim))

    const response = await createAviso({ ...aviso, inicio, fim })

    if (response && response.id) {
      history.push(`/avisos/${response.id}`)
    }
  }, [history, aviso])

  const change = useCallback(
    (field, value) => {
      setAviso({ ...aviso, [field]: value })
    },
    [aviso]
  )

  return (
    <>
      <Container className="pb-7">
        <Row className="mt-5">
          <Col lg={2}>
            <ButtonLink variant="gray" to="/avisos">
              Voltar
            </ButtonLink>
          </Col>
        </Row>

        <Box className="mt-5 py-5">
          <Row>
            <Col lg={{ offset: 1, size: 4 }}>
              <Label>Título</Label>
              <Input
                value={aviso.titulo}
                onChange={(e) => change('titulo', e.target.value)}
              />
            </Col>
            <Col lg={{ offset: 0, size: 3 }}>
              <Label>Início</Label>
              <Input
                value={aviso.inicio}
                type="date"
                onChange={(e) => change('inicio', e.target.value)}
              />
            </Col>
            <Col lg={{ offset: 0, size: 3 }}>
              <Label>Fim</Label>
              <Input
                value={aviso.fim}
                type="date"
                onChange={(e) => change('fim', e.target.value)}
              />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col lg={{ offset: 1, size: 10 }}>
              <Label>Descrição</Label>
              <Textarea
                value={aviso.descricao}
                type="date"
                onChange={(e) => change('descricao', e.target.value)}
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

export default AvisosNovo
