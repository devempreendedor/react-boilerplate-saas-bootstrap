import * as React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import {
  Container,
  Heading,
  Layout,
  PokerTable,
  TableModal,
} from '../../../components'
import { useDispatch, useSelector } from 'react-redux'
import { tableAction } from '../../../store/actions'

const List = () => {
  const [show, setShow] = React.useState(false)
  const dispatch = useDispatch()
  const tables = useSelector((state) => state.table.data)
  const [table, setTable] = React.useState(null)

  React.useEffect(() => {
    dispatch(tableAction.list())
  }, [])

  const handleOpen = async (tableId: string) => {
    const response = await dispatch(tableAction.find(tableId))
    setTable(response.data)
    setShow(true)
  }

  const handleCloseModal = () => {
    setShow(false)
    setTable(null)
  }

  return (
    <Layout>
      <Container>
        <Heading title="Mesas" />
        <div className="mb-4">
          <Button onClick={() => setShow(true)}>Nova Mesa</Button>
        </div>
        <Row>
          {tables.map((row, i) => (
            <Col key={i} className="mb-4" md={4}>
              <PokerTable handleOpen={handleOpen} table={row} />
            </Col>
          ))}
        </Row>
      </Container>
      <TableModal table={table} show={show} closeModal={handleCloseModal} />
    </Layout>
  )
}

export default List
