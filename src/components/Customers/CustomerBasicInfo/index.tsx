import * as React from 'react'
import { Button, Card, Row } from 'react-bootstrap'
import './styles.scss'

const CustomerBasicInfo = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Informações Pessoais</Card.Title>
        <div className="form-view-row">
          <div className="form-view-label">Nome:</div>
          <div className="form-view-value">João Silva</div>
        </div>
        <div className="form-view-row">
          <div className="form-view-label">Nome:</div>
          <div className="form-view-value">João Silva</div>
        </div>
        <Button className="mt-3">Editar Cliente</Button>
      </Card.Body>
    </Card>
  )
}

export default CustomerBasicInfo
