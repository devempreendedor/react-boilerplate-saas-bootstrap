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
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import Pagination from '../../Pagination'

const ListCustomers = () => {
  const history = useHistory()

  const { data, query, totalCount } = useSelector(
    (state: RootState) => state.customer
  )

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

  console.log('query', query, totalCount)

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
      <Pagination
        currentPage={parseInt(query.page)}
        pageSize={parseInt(query.limit)}
        totalCount={totalCount}
        onPageChange={(v) => console.log('V =>', v)}
      />
    </Card>
  )
}

export default ListCustomers
