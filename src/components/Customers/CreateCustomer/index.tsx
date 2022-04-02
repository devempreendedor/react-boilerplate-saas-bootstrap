import * as React from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'

const CreateCustomer = () => {
  const [validated, setValidated] = React.useState(false)

  const handleSubmit = (event: any) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
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
              />
              <Form.Control.Feedback type="invalid">
                Por favor, insira um nome.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>CPF</Form.Label>
              <Form.Control required type="text" placeholder="CPF do cliente" />
              <Form.Control.Feedback type="invalid">
                Por favor, insira o CPF do cliente.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Telefone</Form.Label>
              <Form.Control type="text" placeholder="Telefone do cliente" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="Email do cliente" />
            </Form.Group>
          </Row>
          <Button variant="primary" type="submit">
            Salvar
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default CreateCustomer
