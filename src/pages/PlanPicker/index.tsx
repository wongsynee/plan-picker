import React, { Fragment, PureComponent } from 'react'

import { Interval } from '../../constants/enums'
import { IData } from '../../constants/interface'
import CenteredBlock from '../../components/blocks/CenteredBlock'
import Header from '../../components/blocks/Header'
import Navigation from '../../components/blocks/Navigation'
import Heading from '../../components/blocks/Heading'
import Tabs from '../../components/blocks/Tabs'

interface IPlanPicker {
  data?: IData[];
  interval?: (Interval| undefined)[];
  paymentByWeekly?: number[];
  paymentByFortnightly?: number[];
  paymentByMonthly?: number[];
  selectedInterval: Interval;
  getData(): void;
  setSelectedInterval(inteval: Interval): void;
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
      paymentByWeekly,
      paymentByFortnightly,
      paymentByMonthly,
      selectedInterval,
      setSelectedInterval,
    } = this.props

    return (
      <Fragment>
        <CenteredBlock>
          <Header />
          <Navigation />
          <Heading />
          <Tabs
            interval={interval}
            paymentByWeekly={paymentByWeekly}
            paymentByFortnightly={paymentByFortnightly}
            paymentByMonthly={paymentByMonthly}
            selectedInterval={selectedInterval}
            setSelectedInterval={setSelectedInterval}
          />
        </CenteredBlock>
      </Fragment>
    )
  }
}

export default PlanPicker
