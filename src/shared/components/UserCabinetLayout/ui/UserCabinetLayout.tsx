import type { FC } from 'react'

import { Outlet } from 'react-router-dom'

interface UserCabinetLayoutProps {}

export const UserCabinetLayout: FC<UserCabinetLayoutProps> = () => {
  return <Outlet />
}
