import { createBrowserRouter, Navigate } from 'react-router-dom'

import { AsyncImport } from '@shared/components/AsyncImport'
import { ErrorPage } from '@shared/components/ErrorPage'

import { UserCabinetLayout } from './layouts/UserCabinetLayout'

// import { App } from './App'

// const AUTH_ROUTES = {
//   path: '/*',
//   element: <AuthLayout />,
//   children: [
//     {
//       path: 'login',
//       async lazy() {
//         const { LoginPage } = await import('@pages/login')
//         return { Component: LoginPage }
//       },
//     },
//     {
//       path: 'register',
//       async lazy() {
//         const { RegistrationPage } = await import('@pages/register')
//         return { Component: RegistrationPage }
//       },
//     },
//     {
//       path: 'reset',
//       async lazy() {
//         const { ResetPasswordPage } = await import('@pages/reset-password')
//         return { Component: ResetPasswordPage }
//       },
//     },
//   ],
// }

const USER_CABINET_ROUTES = {
  path: '/*',
  element: <UserCabinetLayout />,
  children: [
    {
      path: 'keys',
      element: <AsyncImport importFn={() => import('@pages/Keys')} />,
    },
    {
      path: 'referrals',
      element: <AsyncImport importFn={() => import('@pages/Referrals')} />,
    },
    {
      path: 'tariffs',
      element: <AsyncImport importFn={() => import('@pages/Tariffs')} />,
    },
    {
      path: 'purchases',
      element: <AsyncImport importFn={() => import('@pages/Purchases')} />,
    },
  ],
}

const ROUTES = [
  {
    path: '/',
    // element: <Frame />,
    children: [
      // {
      //   index: true,
      //   element: <Navigate to={true ? 'keys' : 'login'} replace />,
      // },
      // AUTH_ROUTES,
      USER_CABINET_ROUTES,
      {
        path: '403',
        element: <ErrorPage code={403} />,
      },
      {
        path: '404',
        element: <ErrorPage code={404} />,
      },
      {
        path: '500',
        element: <ErrorPage code={500} />,
      },
      {
        path: '503',
        element: <ErrorPage code={503} />,
      },
      {
        path: '*',
        element: <Navigate to='404' replace />,
      },
    ],
  },
]

export const router = createBrowserRouter(ROUTES)
