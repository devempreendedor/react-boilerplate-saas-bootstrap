import * as React from 'react'
import { Button, Card } from 'react-bootstrap'
import {
  MdDeleteOutline,
  MdOutlineEdit,
  MdOutlineRemoveRedEye,
} from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { RootState } from '../../../store'
import MoreButton from '../../MoreButton'
import Table from '../../Table'
import './styles.scss'
import { formatStatus } from '../../../utils/formatStatus'
import { Status } from '../../'

const ListTournaments = () => {
  const history = useHistory()

  const { data, query, totalCount } = useSelector(
    (state: RootState) => state.tournament
  )

  const columns = [
    {
      Header: 'Torneio',
      accessor: 'name',
    },
    {
      Header: 'Rebuy',
      accessor: 'rebuy',
      Cell: (props: any) => (
        <div>{props.row.original.rebuy ? 'Rebuy' : 'Sem Rebuy'}</div>
      ),
    },
    {
      Header: 'Addon',
      accessor: 'addon',
      Cell: (props: any) => (
        <div>{props.row.original.addon ? 'Addon' : 'Sem Addon'}</div>
      ),
    },
    {
      Header: 'Status',
      accessor: 'status',
      Cell: (props: any) => {
        const { label, color } = formatStatus(props.row.original.status)
        return <Status label={label} color={color} />
      },
    },
    {
      Header: 'Ações',
      accessor: 'actions',
      Cell: (props: any) => (
        <MoreButton
          options={[
            {
              label: 'Visualizar',
              onClick: () =>
                history.push(`/tournaments/v/${props.row.original._id}`),
              icon: <MdOutlineRemoveRedEye color="#3b82f6" />,
            },
            {
              label: 'Editar',
              onClick: () =>
                history.push(`/tournaments/e/${props.row.original._id}`),
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

  return (
    <Card>
      <Card.Header>
        <div className="list-tournaments-header">
          <Button
            onClick={() => history.push('/tournaments/new')}
            variant="primary"
          >
            Add Torneio
          </Button>
        </div>
      </Card.Header>
      <Card.Body>
        <Table data={data} columns={columns} />
      </Card.Body>
    </Card>
  )
}

export default ListTournaments
