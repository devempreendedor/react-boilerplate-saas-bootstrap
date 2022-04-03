import * as React from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { authAction } from '../../../store/actions'

const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [values, setValues] = React.useState({
    email: '',
    password: '',
  })
  const [validated, setValidated] = React.useState(false)

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    const response = await dispatch(authAction.login(values))

    if (response.status === 200) {
      toast.success('Login feito com sucesso!')
      history.push('/customers')
    }
  }

  const handleInput = (field: string, value: string) => {
    setValues((s: any) => ({ ...s, [field]: value }))
  }

  return (
    <Container>
      <Card>
        <Card.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => handleInput('email', e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Informe um email.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => handleInput('password', e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Informe uma senha.
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">
              Entrar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Login
