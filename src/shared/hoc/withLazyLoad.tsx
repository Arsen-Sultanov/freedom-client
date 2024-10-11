import { Suspense, lazy, type FC, type ReactNode } from 'react'

import { ErrorBoundary } from 'react-error-boundary'

export const withLazyLoad = <ComponentPropsType extends Record<string, any>>(
  importFn: () => Promise<any> // Функция, которая возвращает Promise от import()
) => {
  const LazyComponent = lazy(async () => {
    const module = await importFn()

    return { default: Object.values(module).at(0) } // Возвращаем первый экспорт
  })

  const WrappedComponent: FC<ComponentPropsType & { fallback?: ReactNode }> = ({
    fallback,
    ...props
  }) => (
    <ErrorBoundary>
      <Suspense fallback={fallback}>
        <LazyComponent {...props} />
      </Suspense>
    </ErrorBoundary>
  )

  return WrappedComponent
}
