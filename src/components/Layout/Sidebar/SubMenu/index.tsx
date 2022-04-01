import * as React from 'react'
import './styles.scss'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { Link } from 'react-router-dom'

type Item = {
  title: string
  icon?: React.ReactNode
  path?: string
}

interface ItemMenu extends Item {
  children?: Item[]
}

interface Props {
  item: ItemMenu
}

const SubMenu = ({ item }: Props) => {
  const [subnav, setSubnav] = React.useState(false)

  const showSubnav = () => setSubnav(!subnav)

  return (
    <>
      <Link
        to={item.path}
        className="submenu-item"
        onClick={item.children && showSubnav}
      >
        <div className="submenu-item-row">
          <div className="submenu-item-icon">{item?.icon}</div>
          <span>{item.title}</span>
        </div>
        {item.children && (
          <div className="submenu-item-arrow">
            {subnav ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </div>
        )}
      </Link>
      {subnav &&
        item.children?.map((row, i) => (
          <Link
            onClick={() => setSubnav(false)}
            to={row.path}
            className="submenu-item"
            key={i}
          >
            <div className="submenu-item-row">
              <div className="submenu-item-icon">{row?.icon}</div>
              <span>{row.title}</span>
            </div>
          </Link>
        ))}
    </>
  )
}

export default SubMenu
