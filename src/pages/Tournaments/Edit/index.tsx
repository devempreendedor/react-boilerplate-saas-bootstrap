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
import { RootState } from '../../../store'
import { tournamentAction } from '../../../store/actions'

const TournamentGeneral = React.lazy(
  () => import('../../../components/Tournaments/TournamentGeneral')
)

const ViewTournament = () => {
  const dispatch = useDispatch()
  const { path } = useRouteMatch()

  const { pathname } = useLocation()

  const params = useParams()

  const tabs = [
    {
      title: 'Geral',
      to: `/tournaments/e/${params.id}`,
    },
    {
      title: 'Rebuy e Addon',
      to: `/tournaments/e/${params.id}/rebuy`,
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

  React.useEffect(() => {
    dispatch(tournamentAction.find(params.id))
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
                  <Route path={path}>
                    <TournamentGeneral tournament={tournament} />
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
