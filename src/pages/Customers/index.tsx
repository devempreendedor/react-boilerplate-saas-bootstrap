import * as React from 'react'
import { Container, Heading, Layout, ListCustomers } from '../../components'

const Customers = () => {
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
