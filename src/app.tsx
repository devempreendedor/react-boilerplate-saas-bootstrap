import React from 'react'
import { Provider } from 'react-redux'
import store from './store'

import './styles/main.scss'
import Routes from './routes'

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

export default App
