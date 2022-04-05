import * as React from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { tournamentValueService } from '../../../services'

interface Props {
  show: boolean
  closeModal(): void
  tournamentId: string
}

const EntriesModal = ({ show, closeModal, tournamentId }: Props) => {
  const dispatch = useDispatch()
  const [validated, setValidated] = React.useState(false)

  const [values, setValues] = React.useState({
    type: 'buyin',
    amount: '',
    fee: '',
    chips: '',
  })

  const handleInput = (field: string, value: string) => {
    setValues((s: any) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.stopPropagation()
      setValidated(true)
      return
    }

    const body = {
      ...values,
      amount: parseFloat(values.amount),
      fee: parseFloat(values.fee),
      chips: parseInt(values.chips),
      tournament: tournamentId,
    }

    const response = await dispatch(tournamentValueService.create(body))

    console.log('response'), response
    if (response.status === 201) {
      toast.success('Entrada criado')
      closeModal()
    }
  }

  return (
    <Modal show={show} onHide={closeModal}>
      <Modal.Header>
        <Modal.Title>Nova Entrada</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Tipo</Form.Label>
              <Form.Select
                value={values.type}
                required
                onChange={(e) => handleInput('type', e.target.value)}
              >
                <option>Selecione uma opção</option>
                <option value="buyin">BuyIn</option>
                <option value="rebuy">Rebuy</option>
                <option value="addon">Addon</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Valor</Form.Label>
              <Form.Control
                required
                placeholder="Valor"
                onChange={(e) => handleInput('amount', e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Taxa</Form.Label>
              <Form.Control
                required
                placeholder="Taxa"
                onChange={(e) => handleInput('fee', e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Fichas</Form.Label>
              <Form.Control
                required
                placeholder="Fichas"
                onChange={(e) => handleInput('chips', e.target.value)}
              />
            </Form.Group>
          </Row>
          <Button type="submit">Criar Entrada</Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default EntriesModal
