import * as React from 'react'
import './styles.scss'

interface Props {
  title?: string
}

const Heading = ({ title }: Props) => {
  return (
    <div className="heading">
      <h5>{title}</h5>
    </div>
  )
}

export default Heading
