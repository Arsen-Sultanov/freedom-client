import { memo, useRef } from 'react'

import NoticeIcon from '@rsuite/icons/Notice'
import {
  Whisper,
  type WhisperInstance,
  Stack,
  Badge,
  Avatar,
  IconButton,
} from 'rsuite'

import { AdminSpeaker } from './AdminSpeaker'
import { NoticeSpeaker } from './NoticeSpeaker'

import './header.less'

export const Header = memo(() => {
  const trigger = useRef<WhisperInstance>(null)

  return (
    <Stack className='header' spacing={8}>
      <Whisper
        placement='bottomEnd'
        trigger='click'
        ref={trigger}
        speaker={<NoticeSpeaker />}
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
        speaker={<AdminSpeaker />}
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
