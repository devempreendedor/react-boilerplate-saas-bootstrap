import * as React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { TournamentValue } from '../../../types'
import CloseButton from 'react-bootstrap/CloseButton'
import { tournamentValueService } from '../../../services'
import toast from 'react-hot-toast'
import { EntriesModal } from '../'
interface Props {
  entries: TournamentValue[] | []
  tournamentId: string
}

const TournamentEntries = ({ entries, tournamentId }: Props) => {
  const [values, setValues] = React.useState(entries)
  const [show, setShow] = React.useState(false)

  const types = [
    {
      label: 'BuyIn',
      value: 'buyin',
    },
    {
      label: 'Rebuy',
      value: 'rebuy',
    },
    {
      label: 'Addon',
      value: 'addon',
    },
  ]

  const removeValue = async (id: string) => {
    const newArr = [...values]

    const response = await tournamentValueService.remove(id)

    if (response.status === 200) {
      toast.success('Entrada removida')
      const idx = newArr.findIndex((row) => row._id === id)
      newArr.splice(idx, 1)
      setValues(newArr)
    }
  }

  const handleInput = (i: number, field: string, value: string) => {
    const newArr = [...values]

    newArr[i][field] = value

    setValues(newArr)
  }

  return (
    <Form>
      <Row className="mb-4">
        <Form.Group>
          <Button onClick={() => setShow(true)}>Add Entrada</Button>
        </Form.Group>
      </Row>
      {values.map((row, i) => (
        <Row className="mb-4" key={i}>
          <Form.Group as={Col} md="2">
            <Form.Label>Tipo</Form.Label>
            <Form.Control
              disabled
              type="text"
              placeholder="valor"
              value={types.find((t) => t.value === row.type).label}
            />
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Valor</Form.Label>
            <Form.Control
              type="text"
              placeholder="valor"
              value={row.amount}
              onChange={(e) => handleInput(i, 'amount', e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Taxa</Form.Label>
            <Form.Control
              type="text"
              placeholder="Taxa"
              value={row.fee}
              onChange={(e) => handleInput(i, 'fee', e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Fichas</Form.Label>
            <Form.Control
              type="text"
              placeholder="Fichas"
              value={row.chips}
              onChange={(e) => handleInput(i, 'chips', e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} md="1">
            <div
              style={{ display: 'flex', alignItems: 'center', height: '100%' }}
            >
              <CloseButton onClick={() => removeValue(row._id)} />
            </div>
          </Form.Group>
        </Row>
      ))}
      <EntriesModal
        tournamentId={tournamentId}
        show={show}
        closeModal={() => setShow(false)}
      />
    </Form>
  )
}

export default TournamentEntries
