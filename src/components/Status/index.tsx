import * as React from 'react'
import './styles.scss'

interface Props {
  color: string
  label: string
}

const Status = ({ label, color }: Props) => {
  return (
    <div className="status-row">
      <div className="status-icon" style={{ backgroundColor: color }} />
      <div className="status-label">{label}</div>
    </div>
  )
}

export default Status
