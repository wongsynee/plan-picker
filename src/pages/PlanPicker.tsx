import React, { Fragment, PureComponent } from 'react'

import CenteredBlock from '../components/blocks/CenteredBlock'
import Header from '../components/blocks/Header'
import Navigation from '../components/blocks/Navigation'

class PlanPicker extends PureComponent {
  public render() {
    return (
      <Fragment>
        <CenteredBlock>
          <Header />
          <Navigation />
        </CenteredBlock>
      </Fragment>
    )
  }
}

export default PlanPicker