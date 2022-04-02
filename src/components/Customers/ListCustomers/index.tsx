import * as React from 'react'
import { Button, Card } from 'react-bootstrap'
import {
  MdOutlineEdit,
  MdDeleteOutline,
  MdOutlineRemoveRedEye,
} from 'react-icons/md'
import { Table, MoreButton } from '../../'
import { useHistory } from 'react-router-dom'
import './styles.scss'

const ListCustomers = () => {
  const history = useHistory()

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
      Cell: (props) => (
        <MoreButton
          options={[
            {
              label: 'Visualizar',
              onClick: () =>
                history.push(`/customers/v/${props.row.original._id}`),
              icon: <MdOutlineRemoveRedEye color="#3b82f6" />,
            },
            {
              label: 'Editar',
              onClick: () => console.log('Editar'),
              icon: <MdOutlineEdit color="#22c55e" />,
            },
            {
              label: 'Deletar',
              onClick: () => console.log('Editar'),
              icon: <MdDeleteOutline color="#ef4444" />,
            },
          ]}
        />
      ),
    },
  ]

  const data: any[] = [
    {
      _id: 1,
      name: 'Joao Silva',
      email: 'joao@admin.com',
      phone: '3782737822',
    },
  ]

  return (
    <Card>
      <Card.Header>
        <div className="list-customers-header">
          <Button
            onClick={() => history.push('/customers/new')}
            variant="primary"
          >
            Add Cliente
          </Button>
        </div>
      </Card.Header>
      <Card.Body>
        <Table data={data} columns={columns} />
      </Card.Body>
    </Card>
  )
}

export default ListCustomers
