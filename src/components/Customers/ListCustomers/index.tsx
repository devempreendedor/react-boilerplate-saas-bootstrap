import * as React from 'react'
import { Button, Card } from 'react-bootstrap'
import { MdOutlineEdit, MdDeleteOutline } from 'react-icons/md'
import { Table, MoreButton } from '../../'
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
    {
      Header: 'Ações',
      accessor: 'actions',
      Cell: () => (
        <MoreButton
          options={[
            {
              label: 'Editar',
              onClick: () => console.log('Editar'),
              icon: <MdOutlineEdit />,
            },
          ]}
        />
      ),
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
