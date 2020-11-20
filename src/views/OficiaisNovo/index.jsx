import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import { Input, Button, Table } from '../../components'
import ButtonLink from '../../components/ButtonLink'
import { createOficial } from './services/requests'

function OficiaisNovo() {
  const history = useHistory()
  const [oficial, setOficial] = useState([])

  const create = useCallback(async (id, data) => {
    await createOficial(id, data)
  }, [])

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
      </Container>
    </>
  )
}

export default OficiaisNovo
