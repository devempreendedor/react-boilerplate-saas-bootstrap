import * as React from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { tournamentAction } from '../../../store/actions'

const TournamentForm = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [validated, setValidated] = React.useState(false)
  const [values, setValues] = React.useState<any>({
    name: '',
    date: '',
    modality: '',
    rebuy: false,
    addon: false,
    fee: '',
    buyIn: '',
    startChips: '',
  })

  const handleInput = (field: string, value: string) => {
    setValues((s: any) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.stopPropagation()
      setValidated(true)
      return
    }

    const body = {
      ...values,
      buyIn: parseFloat(values.buyIn),
      fee: parseFloat(values.fee),
      startChips: parseInt(values.startChips),
    }

    const response = await dispatch(tournamentAction.create(body))
    if (response.status === 201) {
      toast.success('Torneio criado')
      history.push(`/tournaments/v/${response.data._id}`)
    }
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>Criar Novo Torneio</Card.Title>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Nome</Form.Label>
              <Form.Control
                required
                placeholder="Nome do torneio"
                onChange={(e) => handleInput('name', e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Data</Form.Label>
              <Form.Control
                type="date"
                required
                placeholder="Nome do torneio"
                onChange={(e) => handleInput('date', e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Tipo</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => handleInput('modality', e.target.value)}
              >
                <option>Selecione um tipo</option>
                <option value="texas">Texas Hold'em</option>
                <option value="omaha4">Omaha 4 Cartas</option>
                <option value="omaha5">Omaha 5 Cartas</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group>
              <Form.Check
                type="checkbox"
                label="+ Rebuy"
                onChange={(e) => handleInput('rebuy', !values.rebuy)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group>
              <Form.Check
                type="checkbox"
                label="+ Addon"
                onChange={(e) => handleInput('addon', !values.addon)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>BuyIn</Form.Label>
              <Form.Control
                type="text"
                required
                onChange={(e) => handleInput('buyIn', e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Taxa</Form.Label>
              <Form.Control
                type="text"
                required
                onChange={(e) => handleInput('fee', e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Fichas Iniciais</Form.Label>
              <Form.Control
                required
                onChange={(e) => handleInput('startChips', e.target.value)}
              />
            </Form.Group>
          </Row>
          <Button type="submit">Criar Torneio</Button>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default TournamentForm
