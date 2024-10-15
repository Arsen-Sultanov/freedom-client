import { type FC, useState } from 'react'

import classNames from 'classnames'
import { Outlet, useNavigate } from 'react-router-dom'
import { Container, Sidenav, Content, Nav, Sidebar } from 'rsuite'

import { Brand } from '@shared/components/Brand'
import { Header } from '@shared/components/Header'
import { NAV_ITEMS } from '../constants'

import { NavToggle } from './NavToggle'

import styles from './frame.module.less'

export const Frame: FC = () => {
  const [expand, setExpand] = useState(true)
  const navigate = useNavigate()

  const containerClasses = classNames('page-container', styles.content, {
    'container-full': !expand,
  })
  return (
    <Container className={styles.frame}>
      <Sidebar
        style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
        width={expand ? 260 : 56}
        collapsible
      >
        <Sidenav.Header>
          <Brand />
        </Sidenav.Header>
        <Sidenav appearance='subtle' className={styles.sidenav}>
          <Sidenav.Body>
            <Nav onSelect={navigate}>
              {NAV_ITEMS.map(({ id, link, label, Icon }) => (
                <Nav.Item
                  className={styles.navItem}
                  key={id}
                  eventKey={link}
                  icon={<Icon />}
                  style={{ whiteSpace: 'nowrap' }}
                >
                  {label}
                </Nav.Item>
              ))}
            </Nav>
          </Sidenav.Body>
        </Sidenav>
        <NavToggle
          className={styles.navToggle}
          expand={expand}
          onChange={() => setExpand(!expand)}
        />
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
