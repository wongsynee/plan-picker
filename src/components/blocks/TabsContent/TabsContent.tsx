import React, { Fragment, PureComponent } from 'react'

import { PRICE } from '../../../constants/variables'
import { Interval } from '../../../constants/enums'
import {
  TabsContentWrapper,
  TabsRow,
} from './TabsContent.style'

interface ITabs {
  selectedTab: Interval;
  interval?: (Interval| undefined)[];
  paymentByWeekly?: number[];
  paymentByFortnightly?: number[];
  paymentByMonthly?: number[];
}

class TabsContent extends PureComponent<ITabs> {
  public renderRowsByInterval = () => {
    const {
      selectedTab,
      paymentByWeekly,
      paymentByFortnightly,
      paymentByMonthly,
    } = this.props

    switch (selectedTab) {
      case Interval.Weekly:
        return paymentByWeekly && paymentByWeekly.map((item: number) => (
          <TabsRow key={item}>
            {item} X {PRICE/item} · {' '}
            <span>{Interval.Weekly}</span> · {' '}
            Inc. Fees
          </TabsRow>
        ))
      case Interval.Fortnightly:
        return paymentByFortnightly && paymentByFortnightly.map((item: number) => (
          <TabsRow key={item}>
            {item} X {PRICE/item} · {' '}
            <span>{Interval.Fortnightly}</span> · {' '}
            Inc. Fees
          </TabsRow>
        ))
      case Interval.Monthly:
        return paymentByMonthly && paymentByMonthly.map((item: number) => (
          <TabsRow key={item}>
            {item} X {PRICE/item} · {' '}
            <span>{Interval.Monthly}</span> · {' '}
            Inc. Fees
          </TabsRow>
        ))
    }
  }

  public render() {
    return (
      <TabsContentWrapper>
        {this.renderRowsByInterval()}
      </TabsContentWrapper>
    )
  }
}

export default TabsContent