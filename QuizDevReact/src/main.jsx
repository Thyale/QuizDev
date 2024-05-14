import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Header from './Cabecalho/Header'
ReactDOM.createRoot(document.getElementById('Header')).render(
  <React.StrictMode>
    <Header/>
  </React.StrictMode>,
)

import Corpo from './Corpo/Corpo'
ReactDOM.createRoot(document.getElementById('Main')).render(
  <React.StrictMode>
    <Corpo/>
  </React.StrictMode>,
)

