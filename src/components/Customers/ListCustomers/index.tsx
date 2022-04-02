import * as React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Table } from '../../'
import './styles.scss'

const ListCustomers = () => {
  const columns = [
    {
      Header: 'Cliente',
      accessor: 'name',
    },
    {
      Header: 'Telefone',
      accessor: 'phone',
    },
    {
      Header: 'Email',
      accessor: 'email',
    },
  ]

  const data: any[] = [
    {
      name: 'Joao Silva',
      email: 'joao@admin.com',
      phone: '3782737822',
    },
  ]

  return (
    <Card>
      <Card.Header>
        <div className="list-customers-header">
          <Button variant="primary">Add Cliente</Button>
        </div>
      </Card.Header>
      <Card.Body>
        <Table data={data} columns={columns} />
      </Card.Body>
    </Card>
  )
}

export default ListCustomers
