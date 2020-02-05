import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

import { GlobalStyle } from './theme/Global.style'
import PlanPicker from './pages/PlanPicker'

const App = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Plan Picker</title>
        <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet" />
      </Helmet>
      <GlobalStyle />
      <PlanPicker />
    </Fragment>
  )
}

export default App