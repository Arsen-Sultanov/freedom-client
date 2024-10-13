import type { SpeakerProps } from '../types'

import { forwardRef } from 'react'
import { Popover, Dropdown } from 'rsuite'
import HelpOutlineIcon from '@rsuite/icons/HelpOutline'

export const AdminSpeaker = forwardRef<HTMLDivElement, SpeakerProps>(
  (props, ref) => {
    return (
      <Popover {...props} ref={ref} full>
        <Dropdown.Menu>
          <Dropdown.Item panel style={{ padding: 10, width: 160 }}>
            <p>Signed in as</p>
            <strong>Administrator</strong>
          </Dropdown.Item>
          <Dropdown.Separator />
          <Dropdown.Item>Set status</Dropdown.Item>
          <Dropdown.Item>Profile & account</Dropdown.Item>
          <Dropdown.Item>Feedback</Dropdown.Item>
          <Dropdown.Separator />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Sign out</Dropdown.Item>
          <Dropdown.Item
            icon={<HelpOutlineIcon />}
            href='https://rsuitejs.com'
            target='_blank'
            as='a'
          >
            Help
          </Dropdown.Item>
        </Dropdown.Menu>
      </Popover>
    )
  }
)
