import { type HTMLAttributes, forwardRef, memo, useRef } from 'react'

import HelpOutlineIcon from '@rsuite/icons/HelpOutline'
import NoticeIcon from '@rsuite/icons/Notice'
import {
  Dropdown,
  Popover,
  Whisper,
  type WhisperInstance,
  Stack,
  Badge,
  Avatar,
  IconButton,
  List,
  Button,
} from 'rsuite'

import './header.less'

interface RenderSpeakerProps extends HTMLAttributes<HTMLDivElement> {
  onClose: (delay?: number | undefined) => any
}

const RenderAdminSpeaker = forwardRef<HTMLDivElement, RenderSpeakerProps>(
  ({ onClose, ...props }, ref) => {
    const handleSelect = () => {
      onClose()
    }
    return (
      <Popover {...props} ref={ref} full>
        <Dropdown.Menu onSelect={handleSelect}>
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
            Help{' '}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Popover>
    )
  }
)

const notifications = [
  [
    '7 hours ago',
    'The charts of the dashboard have been fully upgraded and are more visually pleasing.',
  ],
  [
    '13 hours ago',
    'The function of virtualizing large lists has been added, and the style of the list can be customized as required.',
  ],
  ['2 days ago', 'Upgraded React 18 and Webpack 5.'],
  [
    '3 days ago',
    'Upgraded React Suite 5 to support TypeScript, which is more concise and efficient.',
  ],
]

const RenderNoticeSpeaker = forwardRef<HTMLDivElement, RenderSpeakerProps>(
  ({ onClose, ...props }, ref) => {
    return (
      <Popover
        {...props}
        ref={ref}
        style={{ ...props.style, width: 300 }}
        title='Last updates'
      >
        <List>
          {notifications.map((item, index) => {
            const [time, content] = item
            return (
              <List.Item key={index}>
                <Stack spacing={4}>
                  <Badge /> <span style={{ color: '#57606a' }}>{time}</span>
                </Stack>

                <p>{content}</p>
              </List.Item>
            )
          })}
        </List>
        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <Button onClick={() => onClose()}>More notifications</Button>
        </div>
      </Popover>
    )
  }
)

export const Header = memo(() => {
  const trigger = useRef<WhisperInstance>(null)

  return (
    <Stack className='header' spacing={8}>
      <Whisper
        placement='bottomEnd'
        trigger='click'
        ref={trigger}
        speaker={(props, ref) => <RenderNoticeSpeaker {...props} ref={ref} />}
      >
        <IconButton
          icon={
            <Badge content={5}>
              <NoticeIcon style={{ fontSize: 20 }} />
            </Badge>
          }
        />
      </Whisper>

      <Whisper
        placement='bottomEnd'
        trigger='click'
        ref={trigger}
        speaker={(props, ref) => <RenderAdminSpeaker {...props} ref={ref} />}
      >
        <Avatar
          size='sm'
          circle
          src='https://avatars.githubusercontent.com/u/1203827'
          alt='@simonguo'
          style={{ marginLeft: 8 }}
        />
      </Whisper>
    </Stack>
  )
})
