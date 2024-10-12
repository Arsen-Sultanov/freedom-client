// import { AuthLayout, UserCabinetLayout } from '@layouts'
import { createBrowserRouter, Navigate } from 'react-router-dom'

import { ErrorPage } from '@shared/components/ErrorPage'
import { Frame } from '@shared/components/Frame'
import { UserCabinetLayout } from '@shared/components/UserCabinetLayout'

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
      async lazy() {
        const { Keys } = await import('@pages/keys')
        return { Component: Keys }
      },
    },
    {
      path: 'referrals',
      async lazy() {
        const { Referrals } = await import('@pages/referrals')
        return { Component: Referrals }
      },
    },
    {
      path: 'tariffs',
      async lazy() {
        const { Referrals } = await import('@pages/referrals')
        return { Component: Referrals }
      },
    },
    {
      path: 'purchases',
      async lazy() {
        const { Purchases } = await import('@pages/purchases')
        return { Component: Purchases }
      },
    },
  ],
}

const ROUTES = [
  {
    path: '/',
    element: <Frame />,
    children: [
      // {
      //   index: true,
      //   element: <Navigate to={true ? 'devices' : 'login'} replace />,
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
