import React from 'react'
import { Col, Container, Row } from 'reactstrap'

import { H1, H2, H3, H4, H5, H6, P, Small } from '../../components'

import colors from '../../utils/colors'
import fonts from '../../utils/fonts'

function Styleguide() {
  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col lg={2}>
            <H3>Font</H3>
            <H1 className="mt-2">Aa</H1>
          </Col>
          <Col>
            <H3>Font Family</H3>
            <Row className="mt-2">
              <Col lg={3}>
                <P font={fonts.ubuntuLight}>Ubuntu Light</P>
                <P font={fonts.ubuntuLightItalic}>Ubuntu Light Italic</P>
              </Col>
              <Col lg={3}>
                <P font={fonts.ubuntuRegular}>Ubuntu</P>
                <P font={fonts.ubuntuRegularItalic}>Ubuntu Italic</P>
              </Col>
              <Col lg={3}>
                <P font={fonts.ubuntuBold}>Ubuntu Bold</P>
                <P font={fonts.ubuntuBoldItalic}>Ubuntu Bold Italic</P>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col lg={2}>
            <H3>Typography</H3>
            <H1 className="mt-2">Header 1</H1>
            <H2 className="mt-2">Header 2</H2>
            <H3 className="mt-2">Header 3</H3>
            <H4 className="mt-2">Header 4</H4>
            <H5 className="mt-2">Header 5</H5>
            <H6 className="mt-2">Header 6</H6>
            <P className="mt-2">Paragraph</P>
            <Small className="mt-2">Small</Small>
          </Col>
          <Col>
            <H3>Text Colors</H3>
            <Row className="mt-2">
              <Col lg={1} className="pt-0-5 text-center">
                <P color={colors.primary}>Aa</P>
              </Col>
              <Col lg={1} className="pt-0-5 text-center">
                <P color={colors.secondary}>Aa</P>
              </Col>
              <Col lg={1} className="pt-0-5 text-center">
                <P color={colors.gray}>Aa</P>
              </Col>
              <Col lg={1}>
                <div
                  style={{
                    background: '#373435',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
                    borderRadius: '10px',
                    width: '50px',
                    height: '30px',
                    paddingTop: '5px',
                  }}
                >
                  <P color={colors.light} className="text-center">
                    Aa
                  </P>
                </div>
              </Col>
              <Col lg={1} className="pt-0-5 text-center">
                <P color={colors.dark}>Aa</P>
              </Col>
              <Col lg={1} className="pt-0-5 text-center">
                <P color={colors.tertiary}>Aa</P>
              </Col>
              <Col lg={1} className="pt-0-5 text-center">
                <P color={colors.danger}>Aa</P>
              </Col>
              <Col lg={1} className="pt-0-5 text-center">
                <P color={colors.success}>Aa</P>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Styleguide
