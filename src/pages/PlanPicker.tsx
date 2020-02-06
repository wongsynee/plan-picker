import React, { Fragment, PureComponent } from 'react'

import CenteredBlock from '../components/blocks/CenteredBlock'
import Header from '../components/blocks/Header'
import Navigation from '../components/blocks/Navigation'
import Heading from '../components/blocks/Heading'
import Tabs from '../components/blocks/Tabs'

class PlanPicker extends PureComponent {
  public render() {
    return (
      <Fragment>
        <CenteredBlock>
          <Header />
          <Navigation />
          <Heading />
          <Tabs />
        </CenteredBlock>
      </Fragment>
    )
  }
}

export default PlanPicker