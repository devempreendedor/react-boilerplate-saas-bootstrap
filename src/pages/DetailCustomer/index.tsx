import * as React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Container, CustomerBasicInfo, Heading, Layout } from '../../components'

const DetailCustomer = () => {
  return (
    <Layout>
      <Container>
        <Heading title="Detalhes do Cliente" />
        <Row>
          <Col xs={12} md={4}>
            <CustomerBasicInfo />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default DetailCustomer
