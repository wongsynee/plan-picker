import React, { Fragment, PureComponent } from 'react'

import { Interval } from '../../constants/enums'
import CenteredBlock from '../../components/blocks/CenteredBlock'
import Header from '../../components/blocks/Header'
import Navigation from '../../components/blocks/Navigation'
import Heading from '../../components/blocks/Heading'
import Tabs from '../../components/blocks/Tabs'

interface IPlanPicker {
  interval?: Interval;
  getData(): void;
}

class PlanPicker extends PureComponent<IPlanPicker> {
  public componentDidMount() {
    const { getData } = this.props
    // When component mounts, initialise saga to get data from the API.
    getData()
  }

  public render() {
    const {
      interval,
    } = this.props

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
