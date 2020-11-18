import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Input, Button } from '../../components'

function Oficiais() {
  return (
    <>
      <Container className="pb-7">
        <Row className="mt-5">
          <Col lg={8}>
            <Input placeholder="Pesquise" />
          </Col>
          <Col lg={2}>
            <Button outlined variant="blue">
              Pesquisar
            </Button>
          </Col>
          <Col lg={2}>
            <Button outlined variant="blue">
              Novo
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Oficiais
