import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Pagelink } from '../../components'

function Cadastros() {
  return (
    <>
      <Container className="pb-7">
        <Row className="mt-6">
          <Col lg={{ size: 2, offset: 2 }}>
            <Pagelink to="/oficiais">Cadastrar oficias</Pagelink>
          </Col>
          <Col lg={{ size: 2, offset: 1 }}>
            <Pagelink to="/caracteristicas-local">
              Cadastrar caract. do local
            </Pagelink>
          </Col>
          <Col lg={{ size: 2, offset: 1 }}>
            <Pagelink to="/iluminacoes-local">
              Cadastrar iluminação do local
            </Pagelink>
          </Col>
        </Row>
        <Row className="mt-6">
          <Col lg={{ size: 2, offset: 2 }}>
            <Pagelink to="/tempos-local">Cadastrar tempo do local</Pagelink>
          </Col>
          <Col lg={{ size: 2, offset: 1 }}>
            <Pagelink to="/status-semaforo">
              Cadastrar status do semáforo
            </Pagelink>
          </Col>
          <Col lg={{ size: 2, offset: 1 }}>
            <Pagelink to="/formas-sinalizacao">
              Cadastrar formas de sinalização
            </Pagelink>
          </Col>
        </Row>
        <Row className="mt-6">
          <Col lg={{ size: 2, offset: 2 }}>
            <Pagelink to="/tipos-acidente">
              Cadastrar tipos de acidente
            </Pagelink>
          </Col>
          <Col lg={{ size: 2, offset: 1 }}>
            <Pagelink to="/tipos-pista">Cadastrar tipos de pista</Pagelink>
          </Col>
          <Col lg={{ size: 2, offset: 1 }}>
            <Pagelink to="/avisos">Cadastrar avisos</Pagelink>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Cadastros
