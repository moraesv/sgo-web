import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import { Input, Button, Box, Label, Textarea, Radio } from '../../components'
import ButtonLink from '../../components/ButtonLink'
import { updateAtendimento, getAtendimento } from './services/requests'

function AtendimentosEdicao() {
  const { id } = useParams()
  const [atendimento, setAtendimento] = useState({
    nome: '',
    telefone: '',
    descricao: '',
    horaAtendimento: null,
    inicioAtuacao: null,
    fimAtuacao: null,
    formaSolicitacao: 1,
    nomeSolicitante: '',
    qualificadoEnvolvido: false,
    outros: '',
    endereco: {
      cep: '',
      estado: '',
      cidade: '',
      bairro: '',
      logradouro: '',
      endereco: '',
      numero: '',
      complemento: '',
      referencia: '',
    },
  })

  const update = useCallback(async () => {
    await updateAtendimento(id, atendimento)
  }, [atendimento, id])

  const finish = useCallback(async () => {
    await updateAtendimento(id, { ...atendimento, finalizado: true })
  }, [atendimento, id])

  const change = useCallback(
    (field, value) => {
      setAtendimento({ ...atendimento, [field]: value })
    },
    [atendimento]
  )

  const changeEndereco = useCallback(
    (field, value) => {
      setAtendimento({
        ...atendimento,
        endereco: { ...atendimento.endereco, [field]: value },
      })
    },
    [atendimento]
  )

  const load = useCallback(async () => {
    const response = await getAtendimento(id)
    if (response) {
      setAtendimento(response)
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
            <ButtonLink variant="gray" to="/atendimentos">
              Voltar
            </ButtonLink>
          </Col>
          <Col lg={{ offset: 6, size: 2 }}>
            <Button onClick={update}>Salvar</Button>
          </Col>
          <Col lg={{ offset: 0, size: 2 }}>
            <Button onClick={finish} variant="blue">
              Finalizar
            </Button>
          </Col>
        </Row>

        <Box className="mt-5 py-5">
          <Row>
            <Col lg={{ offset: 1, size: 4 }}>
              <Label>Hora da comunicação</Label>
              <Input
                required
                type="time"
                value={atendimento.horaAtendimento}
                onChange={(e) => change('horaAtendimento', e.target.value)}
              />
            </Col>
            <Col lg={{ offset: 2, size: 4 }}>
              <Label>Telefone para contato</Label>
              <Input
                required
                value={atendimento.telefone}
                onChange={(e) => change('telefone', e.target.value)}
              />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col lg={{ offset: 1, size: 10 }}>
              <Label>Descrição</Label>
              <Textarea
                required
                value={atendimento.descricao}
                onChange={(e) => change('descricao', e.target.value)}
              />
            </Col>
          </Row>

          <Row className="mt-5">
            <Col lg={{ offset: 1, size: 10 }}>
              <Label>Como foi solicitado o atendimento da ocorrência?</Label>
            </Col>
          </Row>

          <Row>
            <Col lg={{ offset: 1, size: 3 }}>
              <Radio
                className="mt-3"
                defaultValue="Text"
                label="1 - Via CAD"
                checked={atendimento.formaSolicitacao === 1}
                onChange={() => change('formaSolicitacao', 1)}
              />
            </Col>
            <Col lg={3}>
              <Radio
                className="mt-3"
                defaultValue="Text"
                label="2 - Diretamente a guarnição"
                checked={atendimento.formaSolicitacao === 2}
                onChange={() => change('formaSolicitacao', 2)}
              />
            </Col>
            <Col lg={4}>
              <Radio
                className="mt-3"
                defaultValue="Text"
                label="3 - A guarnição deparou com a ocorrência"
                checked={atendimento.formaSolicitacao === 3}
                onChange={() => change('formaSolicitacao', 3)}
              />
            </Col>
          </Row>

          <Row className="mt-5">
            <Col lg={{ offset: 1, size: 5 }}>
              <Label>Nome do solicitante</Label>
              <Input
                required
                value={atendimento.nomeSolicitante}
                onChange={(e) => change('nomeSolicitante', e.target.value)}
              />
            </Col>
            <Col lg={{ offset: 1, size: 4 }}>
              <Label>Qualificado como envolvido?</Label>
              <Row>
                <Col lg={6}>
                  <Radio
                    className="mt-3"
                    defaultValue="Text"
                    label="Sim"
                    checked={!!atendimento.qualificadoEnvolvido}
                    onChange={() => change('qualificadoEnvolvido', true)}
                  />
                </Col>
                <Col lg={6}>
                  <Radio
                    className="mt-3"
                    defaultValue="Text"
                    label="Não"
                    checked={!atendimento.qualificadoEnvolvido}
                    onChange={() => change('qualificadoEnvolvido', false)}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col lg={{ offset: 1, size: 6 }}>
              <Label>Endereço fornecido</Label>
              <Input
                required
                value={atendimento.endereco.endereco}
                onChange={(e) => changeEndereco('endereco', e.target.value)}
              />
            </Col>
            <Col lg={{ offset: 1, size: 3 }}>
              <Label>Número</Label>
              <Input
                required
                value={atendimento.endereco.numero}
                onChange={(e) => changeEndereco('numero', e.target.value)}
              />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col lg={{ offset: 1, size: 4 }}>
              <Label>Bairro</Label>
              <Input
                required
                value={atendimento.endereco.bairro}
                onChange={(e) => changeEndereco('bairro', e.target.value)}
              />
            </Col>
            <Col lg={{ offset: 1, size: 5 }}>
              <Label>Complemento</Label>
              <Input
                required
                value={atendimento.endereco.complemento}
                onChange={(e) => changeEndereco('complemento', e.target.value)}
              />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col lg={{ offset: 1, size: 10 }}>
              <Label>Outros dados para identificação do solicitante</Label>
              <Input
                required
                value={atendimento.outros}
                onChange={(e) => change('outros', e.target.value)}
              />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col lg={{ offset: 1, size: 4 }}>
              <Label>Hora de início da atuação</Label>
              <Input
                required
                type="time"
                value={atendimento.inicioAtuacao}
                onChange={(e) => change('inicioAtuacao', e.target.value)}
              />
            </Col>
            <Col lg={{ offset: 2, size: 4 }}>
              <Label>Hora do fim da atuação</Label>
              <Input
                required
                type="time"
                value={atendimento.fimAtuacao}
                onChange={(e) => change('fimAtuacao', e.target.value)}
              />
            </Col>
          </Row>
        </Box>
      </Container>
    </>
  )
}

export default AtendimentosEdicao
