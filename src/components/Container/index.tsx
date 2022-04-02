import * as React from 'react'
import './styles.scss'

interface Props {
  children: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className="container">{children}</div>
}

export default Container
