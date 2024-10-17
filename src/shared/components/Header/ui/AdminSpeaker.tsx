import { forwardRef } from 'react'

import ExitIcon from '@rsuite/icons/Exit'
import { Popover, Dropdown } from 'rsuite'

import type { SpeakerProps } from '../types'

export const AdminSpeaker = forwardRef<HTMLDivElement, SpeakerProps>(
  (props, ref) => {
    return (
      <Popover {...props} ref={ref} full>
        <Dropdown.Menu>
          <Dropdown.Item icon={<ExitIcon />}>Sign out</Dropdown.Item>
        </Dropdown.Menu>
      </Popover>
    )
  }
)
