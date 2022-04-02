import * as React from 'react'
import { Container, CreateCustomer, Heading, Layout } from '../../components'

const NewCustomer = () => {
  return (
    <Layout>
      <Container>
        <Heading title="Novo Cliente" />
        <CreateCustomer />
      </Container>
    </Layout>
  )
}

export default NewCustomer
