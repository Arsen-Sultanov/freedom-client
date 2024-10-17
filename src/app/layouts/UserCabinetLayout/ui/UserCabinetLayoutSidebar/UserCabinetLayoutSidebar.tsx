import type { FC } from 'react'

import { useNavigate } from 'react-router-dom'
import { Sidenav, Nav, Sidebar } from 'rsuite'

import { Brand } from '@shared/components/Brand'

import { NAV_ITEMS } from '../../constants'
import { UserCabinetLayoutNavToggle } from '../UserCabinetLayoutNavToggle'

import styles from './UserCabinetLayoutSidebarStyle.module.less'

const { Header, Body } = Sidenav

const RENDERED_NAV_ITEMS = NAV_ITEMS.map(({ id, link, label, Icon }) => (
  <Nav.Item
    key={id}
    eventKey={link}
    icon={<Icon className={styles.icon} />}
    style={{ whiteSpace: 'nowrap' }}
  >
    {label}
  </Nav.Item>
))

type UserCabinetLayoutSidebarPropsType = {
  expand: boolean
  onExpand: (expand: boolean) => void
}

export const UserCabinetLayoutSidebar: FC<
  UserCabinetLayoutSidebarPropsType
> = ({ expand, onExpand }) => {
  const navigate = useNavigate()

  return (
    <Sidebar className={styles.sidebar} width={expand ? 260 : 56} collapsible>
      <Header>
        <Brand />
      </Header>
      <Sidenav appearance='subtle' className={styles.sidenav}>
        <Body>
          <Nav onSelect={navigate}>{RENDERED_NAV_ITEMS}</Nav>
        </Body>
      </Sidenav>
      <UserCabinetLayoutNavToggle
        className={styles.navToggle}
        expand={expand}
        onChange={() => onExpand(!expand)}
      />
    </Sidebar>
  )
}
