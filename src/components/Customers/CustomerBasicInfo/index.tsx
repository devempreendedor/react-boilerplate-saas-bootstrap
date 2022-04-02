import * as React from 'react'
import { Button, Card, Row } from 'react-bootstrap'
import './styles.scss'
import { Customer } from '../../../types'

type Props = {
  customer: Customer
}

const CustomerBasicInfo = ({ customer }: Props) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Informações Pessoais</Card.Title>
        <div className="form-view-row">
          <div className="form-view-label">Nome:</div>
          <div className="form-view-value">{customer.name}</div>
        </div>
        <div className="form-view-row">
          <div className="form-view-label">CPF:</div>
          <div className="form-view-value">{customer.document}</div>
        </div>
        <div className="form-view-row">
          <div className="form-view-label">Telefone:</div>
          <div className="form-view-value">{customer.phone}</div>
        </div>
        <div className="form-view-row">
          <div className="form-view-label">Email:</div>
          <div className="form-view-value">{customer.email}</div>
        </div>
        <Button className="mt-3">Editar Cliente</Button>
      </Card.Body>
    </Card>
  )
}

export default CustomerBasicInfo
