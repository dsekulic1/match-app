import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from 'routing/Routes'

import './App.scss'

function App() {
  return (
    <div className='app-container'>
      <Router>
        <div className='main-container'>
          <Routes />
        </div>
      </Router>
    </div>
  )
}

export default App
