import * as React from 'react'
import './styles.scss'
import { FiUsers } from 'react-icons/fi'
import { RiTrophyLine } from 'react-icons/ri'
import SubMenu from './SubMenu'

const navigation = [
  {
    title: 'Clientes',
    icon: <FiUsers />,
    children: [
      {
        title: 'Listagem',
        path: '/customers',
      },
    ],
  },
  {
    title: 'Torneios',
    icon: <RiTrophyLine />,
    children: [
      {
        title: 'Listagem',
        path: '/tournaments',
      },
    ],
  },
]

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h4>PKClub</h4>
      </div>
      <ul className="sidebar-menu">
        {navigation.map((row, i) => (
          <SubMenu key={i} item={row} />
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
