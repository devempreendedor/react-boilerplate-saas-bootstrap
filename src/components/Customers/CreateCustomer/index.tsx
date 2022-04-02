import * as React from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { customerAction } from '../../../store/actions'
import { Customer } from '../../../types'

interface Props {
  customer?: Customer
}

const CreateCustomer = ({ customer }: Props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [validated, setValidated] = React.useState(false)
  const [values, setValues] = React.useState<TournamentInput>({
    name: '',
    document: '',
    phone: '',
    email: '',
  })

  React.useEffect(() => {
    if (customer) {
      setValues(customer)
    }
  }, [customer])

  const handleInput = (field: string, value: string) => {
    setValues((s: any) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.stopPropagation()
    }

    if (customer) {
      const response = await dispatch(
        customerAction.update(customer._id, values)
      )
      if (response.status === 200) {
        history.push(`/customers/v/${response.data._id}`)
      }
    } else {
      const response = await dispatch(customerAction.create(values))
      if (response.status === 201) {
        history.push(`/customers/v/${response.data._id}`)
      }
    }

    setValidated(true)
  }

  return (
    <Card>
      <Card.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Nome</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Nome do cliente"
                onChange={(e) => handleInput('name', e.target.value)}
                value={values.name}
              />
              <Form.Control.Feedback type="invalid">
                Por favor, insira um nome.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>CPF</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="CPF do cliente"
                onChange={(e) => handleInput('document', e.target.value)}
                value={values.document}
              />
              <Form.Control.Feedback type="invalid">
                Por favor, insira o CPF do cliente.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Telefone do cliente"
                onChange={(e) => handleInput('phone', e.target.value)}
                value={values.phone}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Email do cliente"
                onChange={(e) => handleInput('email', e.target.value)}
                value={values.email}
              />
            </Form.Group>
          </Row>
          <Button variant="primary" type="submit">
            {customer ? 'Editar Cliente' : 'Salvar Cliente'}
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default CreateCustomer
