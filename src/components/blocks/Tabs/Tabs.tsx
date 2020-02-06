import React, { Fragment, PureComponent } from 'react'

import { Interval } from '../../../constants/enums'
import TabsContent from '../TabsContent'
import {
  TabsNavigation,
  TabsButton,
} from './Tabs.style'

interface ITabs {
  interval?: (Interval| undefined)[];
  paymentByWeekly?: number[];
  paymentByFortnightly?: number[];
  paymentByMonthly?: number[];
}

class Tabs extends PureComponent<ITabs> {
  public render() {
    const {
      interval,
      paymentByWeekly,
      paymentByFortnightly,
      paymentByMonthly,
    } = this.props

    if (interval) {
      return (
        <Fragment>
          <TabsNavigation>
            {interval.map((item, index: number) => (
              <TabsButton
                key={index}
                className={index === 0 ? 'selected' : ''}
              >
                {item}
              </TabsButton>
            ))}
          </TabsNavigation>
          <TabsContent
            selectedTab={Interval.Weekly}
            paymentByWeekly={paymentByWeekly}
            paymentByFortnightly={paymentByFortnightly}
            paymentByMonthly={paymentByMonthly}
          />
        </Fragment>
      )
    }

    return <Fragment />
  }
}

export default Tabs