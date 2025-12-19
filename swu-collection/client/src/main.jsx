import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { CreateBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import { Record } from './components/Record.jsx'
import { RecordList } from './components/RecordList.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
