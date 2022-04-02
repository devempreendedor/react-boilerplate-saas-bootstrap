import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Container, CreateCustomer, Heading, Layout } from '../../components'
import { RootState } from '../../store'
import { customerAction } from '../../store/actions'

const EditCustomer = () => {
  const dispatch = useDispatch()
  const customer = useSelector((state: RootState) => state.customer.selected)

  const params = useParams()

  React.useEffect(() => {
    dispatch(customerAction.find(params.id))
  }, [])

  return (
    <Layout>
      <Container>
        {customer && (
          <>
            <Heading title="Editar Cliente" />
            <CreateCustomer customer={customer} />
          </>
        )}
      </Container>
    </Layout>
  )
}

export default EditCustomer
