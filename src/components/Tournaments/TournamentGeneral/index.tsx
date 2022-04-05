import * as React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Tournament } from '../../../types'
import format from 'date-fns/format'
import { tournamentAction } from '../../../store/actions'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'

interface Props {
  tournament: Tournament
}

const TournamentGeneral = ({ tournament }: Props) => {
  const dispatch = useDispatch()
  const [validated, setValidated] = React.useState(false)
  const [values, setValues] = React.useState(tournament)

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
    await dispatch(tournamentAction.update(tournament._id, values))
  }

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nome do torneio"
            value={values.name}
            onChange={(e) => handleInput('name', e.target.value)}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>Tipo</Form.Label>
          <Form.Select
            required
            placeholder="Nome do torneio"
            value={values.modality}
            onChange={(e) => handleInput('modality', e.target.value)}
          >
            <option value="texas">Texas Holdem</option>
            <option value="omaha4">Omaha 4 Cartas</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>Data</Form.Label>
          <Form.Control
            required
            type="date"
            placeholder="Data do Torneio"
            defaultValue={format(new Date(tournament.date), 'yyyy-MM-dd')}
            onChange={(e) => handleInput('date', e.target.value)}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Check
            type="checkbox"
            label="+ Rebuy"
            defaultChecked={tournament.rebuy}
            onChange={(e) => handleInput('rebuy', !values.rebuy)}
          />
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Check
            type="checkbox"
            label="+ Addon"
            defaultChecked={tournament.addon}
            onChange={(e) => handleInput('addon', !values.addon)}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group>
          <Button type="submit" variant="primary">
            Salvar alterações
          </Button>
        </Form.Group>
      </Row>
    </Form>
  )
}

export default TournamentGeneral
