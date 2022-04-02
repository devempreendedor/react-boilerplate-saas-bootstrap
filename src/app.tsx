import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { Toaster } from 'react-hot-toast'

import './styles/main.scss'
import Routes from './routes'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>
      <Toaster />
    </>
  )
}

export default App
