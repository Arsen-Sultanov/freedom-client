import React from 'react'

import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { CustomProvider } from 'rsuite'
import ruRU from 'rsuite/locales/ru_RU'

import { router } from './router'

import './index.less'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CustomProvider locale={ruRU}>
      <RouterProvider router={router} />
    </CustomProvider>
  </React.StrictMode>
)
