import * as React from 'react'
import './styles.scss'

// Components
import Sidebar from './Sidebar'
import Header from './Header'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="layout">
      <Sidebar />
      <Header />
      <div className="main">{children}</div>
    </div>
  )
}

export default Layout
