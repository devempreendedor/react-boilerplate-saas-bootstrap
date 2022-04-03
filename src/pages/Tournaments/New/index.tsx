import * as React from 'react'
import { Container, Heading, Layout, TournamentForm } from '../../../components'

const New = () => {
  return (
    <Layout>
      <Container>
        <Heading title="Novo Torneio" />
        <TournamentForm />
      </Container>
    </Layout>
  )
}

export default New
