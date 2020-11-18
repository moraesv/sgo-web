import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Pagelink } from '../../components'

function Relatorios() {
  return (
    <>
      <Container className="pb-7">
        <Row className="mt-7">
          <Col lg={{ size: 2, offset: 1 }}>
            <Pagelink to="/atendimento-por-oficial">
              Ocorrência por oficial
            </Pagelink>
          </Col>
          <Col lg={{ size: 2, offset: 2 }}>
            <Pagelink to="/ocorrencia-por-bairro">
              Ocorrência por bairro
            </Pagelink>
          </Col>
          <Col lg={{ size: 2, offset: 2 }}>
            <Pagelink to="/ocorrencia-por-data">Ocorrência por data</Pagelink>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Relatorios
