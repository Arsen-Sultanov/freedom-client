import { type FC, useState } from 'react'

import classNames from 'classnames'
import { Outlet, useNavigate } from 'react-router-dom'
import { Container, Sidenav, Content, Nav, Sidebar } from 'rsuite'

import { Brand } from '../../Brand'
import { Header } from '../../Header'

import { NavToggle } from './NavToggle'
import './frame.less'

export interface NavItemData {
  eventKey: string
  title: string
  icon?: any
  to?: string
  target?: string
  children?: NavItemData[]
}

const nav = [
  {
    id: 0,
    link: '/keys',
    label: 'Ключи',
  },
  {
    id: 1,
    link: '/referrals',
    label: 'Рефералы',
  },
  {
    id: 2,
    link: '/purchases',
    label: 'История покупок',
  },
]

export const Frame: FC = () => {
  const [expand, setExpand] = useState(true)
  const navigate = useNavigate()

  const containerClasses = classNames('page-container', {
    'container-full': !expand,
  })
  return (
    <Container className='frame'>
      <Sidebar
        style={{ display: 'flex', flexDirection: 'column' }}
        width={expand ? 260 : 56}
        collapsible
      >
        <Sidenav.Header>
          <Brand />
        </Sidenav.Header>
        <Sidenav appearance='subtle'>
          <Sidenav.Body>
            <Nav onSelect={navigate}>
              {nav.map(({ id, link, label }) => (
                <Nav.Item key={id} eventKey={link}>
                  {label}
                </Nav.Item>
              ))}
            </Nav>
          </Sidenav.Body>
        </Sidenav>
        <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
      </Sidebar>

      <Container className={containerClasses}>
        <Header />
        <Content>
          <Outlet />
        </Content>
      </Container>
    </Container>
  )
}
