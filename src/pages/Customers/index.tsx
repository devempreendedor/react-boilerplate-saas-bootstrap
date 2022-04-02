import * as React from 'react'
import { useDispatch } from 'react-redux'
import { Container, Heading, Layout, ListCustomers } from '../../components'
import { customerAction } from '../../store/actions'

const Customers = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(customerAction.list())
  }, [])

  return (
    <Layout>
      <Container>
        <Heading title="Clientes" />
        <ListCustomers />
      </Container>
    </Layout>
  )
}

export default Customers
