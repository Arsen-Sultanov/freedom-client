import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { CustomProvider } from 'rsuite'
import ruRU from 'rsuite/locales/ru_RU'

import { router } from './router'

import 'rsuite/dist/rsuite.min.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CustomProvider locale={ruRU}>
      <RouterProvider router={router} />
    </CustomProvider>
  </StrictMode>
)
