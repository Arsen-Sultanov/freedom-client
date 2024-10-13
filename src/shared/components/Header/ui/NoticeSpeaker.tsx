import type { SpeakerProps } from '../types'

import { forwardRef } from 'react'
import { Popover, List, Stack, Badge, Button } from 'rsuite'

import { NOTIFICATION } from '../constants'

export const NoticeSpeaker = forwardRef<HTMLDivElement, SpeakerProps>(
  ({ style, ...props }, ref) => {
    return (
      <Popover
        {...props}
        ref={ref}
        style={{ ...style, width: 300 }}
        title='Last updates'
      >
        <List>
          {NOTIFICATION.map(([time, content], index) => (
            <List.Item key={index}>
              <Stack spacing={4}>
                <Badge /> <span style={{ color: '#57606a' }}>{time}</span>
              </Stack>
              <p>{content}</p>
            </List.Item>
          ))}
        </List>
        <Stack style={{ justifyContent: 'center', marginTop: 20 }}>
          <Button>More notifications</Button>
        </Stack>
      </Popover>
    )
  }
)
