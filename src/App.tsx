import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

import { GlobalStyle } from './theme/Global.style'
import PlanPicker from './pages/PlanPicker/container'

import { Provider } from 'react-redux'
// import { PersistGate } from 'redux-persist/integration/react'
// import { ThemeProvider } from 'styled-components'
// import OutOfDateBrowser from './utils/browserUpdate'
// import GlobalStyles from './styles/globalStyle'
// import theme from './styles/theme'
import { store } from './store'
// import App from './App'





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
