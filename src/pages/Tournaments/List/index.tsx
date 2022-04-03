import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Container,
  Heading,
  Layout,
  ListTournaments,
} from '../../../components'
import { RootState } from '../../../store'
import { tournamentAction } from '../../../store/actions'

const List = () => {
  const dispatch = useDispatch()
  const { query } = useSelector((state: RootState) => state.tournament)

  React.useEffect(() => {
    dispatch(tournamentAction.list(query))
  }, [])

  return (
    <Layout>
      <Container>
        <Heading title="Torneios" />
        <ListTournaments />
      </Container>
    </Layout>
  )
}

export default List
