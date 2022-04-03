import * as React from 'react'
import { Card, Nav } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  Route,
  Switch,
  useLocation,
  useParams,
  useRouteMatch,
} from 'react-router-dom'
import { Container, Heading, Layout } from '../../../components'
import { tournamentValueService } from '../../../services'
import { RootState } from '../../../store'
import { tournamentAction } from '../../../store/actions'

const TournamentGeneral = React.lazy(
  () => import('../../../components/Tournaments/TournamentGeneral')
)

const TournamentEntries = React.lazy(
  () => import('../../../components/Tournaments/TournamentEntries')
)

const ViewTournament = () => {
  const dispatch = useDispatch()
  const { path } = useRouteMatch()

  const { pathname } = useLocation()

  const params = useParams()

  const [entries, setEntries] = React.useState([])

  const tabs = [
    {
      title: 'Geral',
      to: `/tournaments/e/${params.id}`,
    },
    {
      title: 'BuyIn, Rebuy e Addon',
      to: `/tournaments/e/${params.id}/entries`,
    },
    {
      title: 'Blinds',
      to: `/tournaments/e/${params.id}/blinds`,
    },
    {
      title: 'Jogadores',
      to: `/tournaments/e/${params.id}/players`,
    },
    {
      title: 'Pagamento',
      to: `/tournaments/e/${params.id}/payments`,
    },
  ]

  const tournament = useSelector(
    (state: RootState) => state.tournament.selected
  )

  const fetchEntries = async () => {
    const response = await tournamentValueService.list({
      tournament: params.id,
    })
    setEntries(response.data.results)
  }

  React.useEffect(() => {
    dispatch(tournamentAction.find(params.id))
  }, [])

  React.useEffect(() => {
    fetchEntries()
  }, [])

  return (
    <Layout>
      <Container>
        <Heading title="Main Event R$400 + 40" />
        <Card>
          <Card.Header>
            <Nav variant="tabs" defaultActiveKey={pathname}>
              {tabs.map((row, i) => (
                <Nav.Item key={i}>
                  <Nav.Link href={row.to}>{row.title}</Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Card.Header>
          <Card.Body>
            {tournament && (
              <Switch>
                <React.Suspense fallback={<div>Loading...</div>}>
                  <Route exact path={path}>
                    <TournamentGeneral tournament={tournament} />
                  </Route>
                  <Route path={`${path}/entries`}>
                    <TournamentEntries entries={entries} />
                  </Route>
                </React.Suspense>
              </Switch>
            )}
          </Card.Body>
        </Card>
      </Container>
    </Layout>
  )
}

export default ViewTournament
