import React from 'react'
import { Helmet } from 'react-helmet'
import { Provider } from 'react-redux'

import { store } from './store'
import { GlobalStyle } from './theme/Global.style'
import PlanPicker from './pages/PlanPicker/container'

const App = () => {
  return (
    <Provider store={store}>
      <Helmet>
        <title>Plan Picker</title>
        <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet" />
      </Helmet>
      <GlobalStyle />
      <PlanPicker />
    </Provider>
  )
}

export default App
