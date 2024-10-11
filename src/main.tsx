import React from 'react'

import { createRoot } from 'react-dom/client'
import { CustomProvider, Button } from 'rsuite'
import ruRU from 'rsuite/locales/ru_RU'

import 'rsuite/dist/rsuite.min.css'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CustomProvider locale={ruRU}>
      <Button appearance='primary'>привет!</Button>
    </CustomProvider>
  </React.StrictMode>
)
