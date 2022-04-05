import * as React from 'react'
import { Card, Col, Row, Button, ButtonToolbar } from 'react-bootstrap'
import { Tournament } from '../../../types'
import { format } from 'date-fns'
import { modalities } from '../../../utils/modalities'
import { useHistory } from 'react-router-dom'

interface Props {
  tournament: Tournament
  entries: any[]
}

const TournamentInfo = ({ tournament, entries }: Props) => {
  const history = useHistory()
  const getValue = (type: string) => {
    const buyIn = entries.find((row) => row.type === type)
    return buyIn ? buyIn.amount : '-'
  }
  return (
    <Card>
      <Card.Header>
        <Card.Title>Dados do Torneio</Card.Title>
      </Card.Header>
      <Card.Body>
        <Row className="mb-4">
          <Col md={4}>
            <div className="ms-2 me-auto">
              <div className="fw-bold">Nome:</div>
              {tournament.name}
            </div>
          </Col>
          <Col md={4}>
            <div className="ms-2 me-auto">
              <div className="fw-bold">Tipo:</div>
              {
                modalities.find((row) => row.value === tournament.modality)
                  .label
              }
            </div>
          </Col>
          <Col md={4}>
            <div className="ms-2 me-auto">
              <div className="fw-bold">Data:</div>
              {format(new Date(tournament.date), 'dd/MM/yyyy')}
            </div>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col md={4}>
            <div className="ms-2 me-auto">
              <div className="fw-bold">Tem Rebuy:</div>
              {tournament.rebuy ? 'Sim' : 'Não'}
            </div>
          </Col>
          <Col md={4}>
            <div className="ms-2 me-auto">
              <div className="fw-bold">Tem Addon:</div>
              {tournament.addon ? 'Sim' : 'Não'}
            </div>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col md={4}>
            <div className="ms-2 me-auto">
              <div className="fw-bold">Valor do BuyIn:</div>
              {getValue('buyin')}
            </div>
          </Col>
          {tournament.rebuy && (
            <Col md={4}>
              <div className="ms-2 me-auto">
                <div className="fw-bold">Valor do Rebuy:</div>
                {getValue('rebuy')}
              </div>
            </Col>
          )}
          {tournament.addon && (
            <Col md={4}>
              <div className="ms-2 me-auto">
                <div className="fw-bold">Valor do Addon:</div>
                {getValue('addon')}
              </div>
            </Col>
          )}
        </Row>

        <Button variant="danger">Excluir Torneio</Button>

        <Button
          onClick={() => history.push(`/tournaments/e/${tournament._id}`)}
          variant="info"
          className="mx-3"
        >
          Editar Torneio
        </Button>
      </Card.Body>
    </Card>
  )
}
export default TournamentInfo
