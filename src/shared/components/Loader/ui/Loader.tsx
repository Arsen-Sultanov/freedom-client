import { type FC } from 'react'

import { Loader as RSuiteLoader, VStack } from 'rsuite'

import loaderStyle from './loaderStyle.module.less'

export const Loader: FC = () => (
  <VStack
    justifyContent='center'
    alignItems='center'
    className={loaderStyle.loader}
  >
    <RSuiteLoader size='md' />
  </VStack>
)
