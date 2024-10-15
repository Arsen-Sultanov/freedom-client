import type { FC } from 'react'

import { Outlet } from 'react-router-dom'

interface UserCabinetProps {}

export const UserCabinet: FC<UserCabinetProps> = () => {
  return <Outlet />
}
