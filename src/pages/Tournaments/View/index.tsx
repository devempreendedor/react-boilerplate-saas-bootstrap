import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Container, Heading, Layout, TournamentInfo } from '../../../components'
import { tournamentValueService } from '../../../services'
import { RootState } from '../../../store'
import { tournamentAction } from '../../../store/actions'

type Params = {
  id: string
}

const View = () => {
  const params: Params = useParams()
  const dispatch = useDispatch()
  const { selected: tournament } = useSelector(
    (state: RootState) => state.tournament
  )

  const [entries, setEntries] = React.useState([])

  const fetchValues = async () => {
    const response = await tournamentValueService.list({
      tournament: params.id,
    })

    setEntries(response?.data.results)
  }

  React.useEffect(() => {
    dispatch(tournamentAction.find(params.id))
  }, [])

  React.useEffect(() => {
    fetchValues()
  }, [])

  return (
    <Layout>
      <Container>
        {tournament && (
          <>
            <Heading title={tournament.name} />
            <TournamentInfo tournament={tournament} entries={entries} />
          </>
        )}
      </Container>
    </Layout>
  )
}

export default View
