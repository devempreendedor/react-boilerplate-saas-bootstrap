import * as React from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { tableAction } from '../../../store/actions'
import { Table } from '../../../types'

interface Props {
  show: boolean
  closeModal(): void
  table?: Table
}

const TableModal = ({ show, closeModal, table }: Props) => {
  const dispatch = useDispatch()
  const [validated, setValidated] = React.useState(false)

  const [values, setValues] = React.useState({
    number: '',
    totalSeats: '',
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
      number: parseFloat(values.number),
      totalSeats: parseFloat(values.totalSeats),
    }

    if (table) {
      const response = await dispatch(tableAction.update(table._id, body))
      if (response.status === 200) {
        closeModal()
      }
    } else {
      const response = await dispatch(tableAction.create(body))
      if (response.status === 201) {
        closeModal()
      }
    }
  }

  React.useEffect(() => {
    if (table) {
      setValues({
        number: table.number.toString(),
        totalSeats: table.totalSeats.toString(),
      })
    }
  }, [table])

  return (
    <Modal show={show} onHide={closeModal}>
      <Modal.Header>
        <Modal.Title>{table ? 'Editar Mesa' : 'Nova Mesa'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Número da Mesa</Form.Label>
              <Form.Control
                required
                placeholder="Numero da mesa"
                onChange={(e) => handleInput('number', e.target.value)}
                value={values.number}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Maximo de Lugares</Form.Label>
              <Form.Control
                required
                placeholder="Qtd de lugares"
                onChange={(e) => handleInput('totalSeats', e.target.value)}
                value={values.totalSeats.toString()}
              />
            </Form.Group>
          </Row>
          <Button type="submit">{table ? 'Editar Mesa' : 'Criar Mesa'}</Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default TableModal
