import type { FC } from 'react'

import { ArrowLeftLine } from '@rsuite/icons'
import { Heading, Text, IconButton, VStack } from 'rsuite'

import { SERVER_ERROR_IMAGES, SERVER_ERROR_SUB_TITLE } from '../constants'
import type { ErrorPagePropsType } from '../types'

import ErrorPageStyle from './ErrorPageStyle.module.less'

export const ErrorPage: FC<ErrorPagePropsType> = ({ code }) => (
  <VStack
    alignItems='center'
    justifyContent='center'
    className={ErrorPageStyle.errorPage}
  >
    <img src={SERVER_ERROR_IMAGES[code]} className={ErrorPageStyle.img} />
    <VStack alignItems='center' spacing={12}>
      <Heading level={1}>{code}</Heading>
      <Text size='xxl' weight='extrabold'>
        Упс… Вы только что нашли страницу с ошибкой
      </Text>
      <Text muted size='xl'>
        {SERVER_ERROR_SUB_TITLE[code]}
      </Text>
      <IconButton
        icon={<ArrowLeftLine />}
        size='lg'
        appearance='primary'
        href='/'
      >
        Вернуться на главную
      </IconButton>
    </VStack>
  </VStack>
)
