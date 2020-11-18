import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Pagelink } from '../../components'

function Registros() {
  return (
    <>
      <Container className="pb-7">
        <Row className="mt-7">
          <Col lg={{ size: 2, offset: 3 }}>
            <Pagelink to="/atendimento">Registrar atendimento</Pagelink>
          </Col>
          <Col lg={{ size: 2, offset: 2 }}>
            <Pagelink to="/ocorrencia">Registrar ocorrência</Pagelink>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Registros
