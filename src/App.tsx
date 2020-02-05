import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

import { GlobalStyle } from './App.style'

const App = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Plan Picker</title>
        <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet" />
      </Helmet>
      <GlobalStyle />
      <div>
        <header>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Fragment>
  )
}

export default App