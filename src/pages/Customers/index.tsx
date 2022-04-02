import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Heading, Layout, ListCustomers } from '../../components'
import { RootState } from '../../store'
import { customerAction } from '../../store/actions'

const Customers = () => {
  const dispatch = useDispatch()
  const { query } = useSelector((state: RootState) => state.customer)

  React.useEffect(() => {
    dispatch(customerAction.list(query))
  }, [query?.page])

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
