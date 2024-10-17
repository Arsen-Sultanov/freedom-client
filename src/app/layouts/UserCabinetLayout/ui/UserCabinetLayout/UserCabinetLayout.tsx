import { type FC, useState } from 'react'

import { Outlet } from 'react-router-dom'
import { Container, Content } from 'rsuite'

import { Header } from '@shared/components/Header'

import { UserCabinetLayoutSidebar } from '../UserCabinetLayoutSidebar'

import UserCabinetLayoutStyle from './UserCabinetLayoutStyle.module.less'

export const UserCabinetLayout: FC = () => {
  const [expand, setExpand] = useState(true)

  return (
    <Container className={UserCabinetLayoutStyle.frame}>
      <UserCabinetLayoutSidebar expand={expand} onExpand={setExpand} />

      <Container className={UserCabinetLayoutStyle.content}>
        <Header />
        <Content>
          <Outlet />
        </Content>
      </Container>
    </Container>
  )
}
