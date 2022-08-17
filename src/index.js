import React from 'react'
import App from './App'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from 'store/store'

import './index.scss'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
