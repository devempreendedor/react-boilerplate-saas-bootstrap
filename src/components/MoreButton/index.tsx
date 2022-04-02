import * as React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { MdOutlineMoreVert } from 'react-icons/md'
import './styles.scss'

type Option = {
  label: string
  onClick(): void
  icon?: React.ReactNode
}

interface Props {
  options: Option[]
}

const MoreButton = ({ options }: Props) => {
  return (
    <DropdownButton className="more-icon" title={<MdOutlineMoreVert />}>
      {options.map((row, i) => (
        <Dropdown.Item
          className="more-icon-row"
          key={i}
          onClick={row.onClick}
          as="button"
        >
          {row.icon && <div className="more-icon-icon">{row.icon}</div>}
          {row.label}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  )
}

export default MoreButton
