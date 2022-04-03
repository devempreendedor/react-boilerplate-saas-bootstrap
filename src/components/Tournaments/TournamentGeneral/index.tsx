import * as React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Tournament } from '../../../types'
import format from 'date-fns/format'

interface Props {
  tournament: Tournament
}

const TournamentGeneral = ({ tournament }: Props) => {
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nome do torneio"
            defaultValue={tournament.name}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>Tipo</Form.Label>
          <Form.Select
            required
            placeholder="Nome do torneio"
            defaultValue={tournament.modality}
          >
            <option value="texas_holdem">Texas Holdem</option>
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
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Check
            type="checkbox"
            label="+ Rebuy"
            defaultChecked={tournament.rebuy}
          />
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Check
            type="checkbox"
            label="+ Addon"
            defaultChecked={tournament.addon}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group>
          <Button variant="primary">Salvar alterações</Button>
        </Form.Group>
      </Row>
    </Form>
  )
}

export default TournamentGeneral
