import * as React from 'react'
import './styles.scss'
import cls from 'classnames'
import { Table } from '../../types'

interface Props {
  table: Table
  handleOpen(tableId: string): void
}

const PokerTable = ({ table, handleOpen }: Props) => {
  function renderText() {
    switch (table.status) {
      case 'open':
        return 'Mesa Aberta'
      default:
        return ''
    }
  }

  return (
    <div
      onClick={() => handleOpen(table._id)}
      className={cls('poker-table-wrapper', `poker-table-${table.status}`)}
    >
      <h4>{`Mesa ${table.number}`}</h4>
      <p>{`${table.seats.length}/${table.totalSeats} Jogadores`}</p>
    </div>
  )
}

export default PokerTable
