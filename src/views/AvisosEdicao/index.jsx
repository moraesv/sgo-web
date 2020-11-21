import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import { Input, Button, Box, Label, Textarea } from '../../components'
import ButtonLink from '../../components/ButtonLink'
import { updateAviso, getAviso } from './services/requests'
import { format } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

function AvisosEdicao() {
  const { id } = useParams()
  const [aviso, setAviso] = useState({
    titulo: '',
    inicio: '',
    fim: '',
    descricao: '',
  })

  const update = useCallback(async () => {
    await updateAviso(id, {
      ...aviso,
      inicio: new Date(aviso.inicio).toLocaleDateString(),
      fim: new Date(aviso.fim).toLocaleDateString(),
    })
  }, [aviso, id])

  const change = useCallback(
    (field, value) => {
      setAviso({ ...aviso, [field]: value })
    },
    [aviso]
  )

  const load = useCallback(async () => {
    const response = await getAviso(id)
    if (response) {
      setAviso({
        ...response,
        inicio: format(new Date(response.inicio), 'yyyy-MM-dd', {
          locale: ptBr,
        }),
        fim: format(new Date(response.fim), 'yyyy-MM-dd', { locale: ptBr }),
      })
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
              <Button onClick={update}>Salvar</Button>
            </Col>
          </Row>
        </Box>
      </Container>
    </>
  )
}

export default AvisosEdicao
