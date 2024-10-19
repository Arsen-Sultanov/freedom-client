import { Suspense, lazy, type FC } from 'react'

import { Loader } from './Loader'

type AsyncImportPropsType = {
  importFn: () => Promise<any>
}

export const AsyncImport: FC<AsyncImportPropsType> = ({ importFn }) => {
  const LazyComponent = lazy(async () => {
    const module = await importFn()

    return { default: Object.values<any>(module).at(0) } // Возвращаем первый экспорт
  })

  return (
    <Suspense fallback={<Loader />}>
      <LazyComponent />
    </Suspense>
  )
}
