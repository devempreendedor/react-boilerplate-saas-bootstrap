import * as React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import { RootState } from '../store'

interface Props {
  children: React.ReactNode
  exact?: boolean
  path: string
}

const PublicRoute = ({ children, ...props }: Props) => {
  const { isLoggedIn } = useSelector((state: RootState) => state.auth)

  if (isLoggedIn) {
    return <Redirect to="/customers" />
  }

  return <Route {...props}>{children}</Route>
}

export default PublicRoute
