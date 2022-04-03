import * as React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Blind } from '../../../types'
import CloseButton from 'react-bootstrap/CloseButton'
import { blindService } from '../../../services'
import toast from 'react-hot-toast'
interface Props {
  blinds: Blind[] | []
}

const TournamentBlinds = ({ blinds }: Props) => {
  const [values, setValues] = React.useState(blinds)

  const types = [
    {
      label: 'Level',
      value: 'level',
    },
    {
      label: 'Break',
      value: 'break',
    },
  ]

  const removeValue = async (id: string) => {
    const newArr = [...values]

    const response = await blindService.remove(id)

    if (response.status === 200) {
      toast.success('Blind removida')
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

  console.log('### values =>', values)

  return (
    <Form>
      <Row className="mb-4">
        <Form.Group>
          <Button>Add Entrada</Button>
        </Form.Group>
      </Row>
      {values.map((row, i) => (
        <Row className="mb-4" key={i}>
          <Form.Group as={Col} md="2">
            <Form.Label>Tipo</Form.Label>
            <Form.Control
              disabled
              type="text"
              placeholder="Tipo"
              value={types.find((t) => t.value === row.type).label}
            />
          </Form.Group>
          <Form.Group as={Col} md="2">
            <Form.Label>Level</Form.Label>
            <Form.Control
              type="text"
              value={row.level}
              disabled={true}
              onChange={(e) => handleInput(i, 'level', e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} md="2">
            <Form.Label>Small Blind</Form.Label>
            <Form.Control
              type="text"
              value={row.smallBlind}
              disabled={!row.smallBlind}
              onChange={(e) => handleInput(i, 'smallBlind', e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} md="2">
            <Form.Label>Big Blind</Form.Label>
            <Form.Control
              type="text"
              value={row.bigBlind}
              disabled={!row.bigBlind}
              onChange={(e) => handleInput(i, 'bigBlind', e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} md="2">
            <Form.Label>Duração</Form.Label>
            <Form.Control
              type="text"
              value={row.duration}
              disabled={!row.duration}
              onChange={(e) => handleInput(i, 'duration', e.target.value)}
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
    </Form>
  )
}

export default TournamentBlinds
