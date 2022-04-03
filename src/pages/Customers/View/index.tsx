import * as React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  Container,
  CustomerBasicInfo,
  Heading,
  Layout,
} from '../../../components'
import { RootState } from '../../../store'
import { customerAction } from '../../../store/actions'

const DetailCustomer = () => {
  const dispatch = useDispatch()
  const customer = useSelector((state: RootState) => state.customer.selected)

  const params = useParams()

  const customerId = params.id as string

  React.useEffect(() => {
    dispatch(customerAction.find(customerId))
  }, [])

  return (
    <Layout>
      <Container>
        {customer && (
          <>
            <Heading title="Detalhes do Cliente" />
            <Row>
              <Col xs={12} md={4}>
                <CustomerBasicInfo customer={customer} />
              </Col>
            </Row>
          </>
        )}
      </Container>
    </Layout>
  )
}

export default DetailCustomer
