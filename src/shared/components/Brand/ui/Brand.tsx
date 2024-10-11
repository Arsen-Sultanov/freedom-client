import type { FC } from 'react'

import { Link } from 'react-router-dom'
import { Stack } from 'rsuite'

import './brand.less'

export const Brand: FC = () => {
  return (
    <Stack className='brand'>
      {/* <Logo height={26} style={{ marginTop: 6 }} /> */}
      <Link to='/'>
        <span style={{ marginLeft: 14 }}>FREEDOM-VPN</span>
      </Link>
    </Stack>
  )
}
