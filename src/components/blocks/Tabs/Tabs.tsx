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
  selectedInterval: Interval;
  setSelectedInterval(inteval: Interval): void;
}

class Tabs extends PureComponent<ITabs> {
  public onClickOfTab = (event: any) => {
    const { setSelectedInterval } = this.props
    // Set redux store's selectedInterval with button's value.
    setSelectedInterval(event.target.value)
  }

  public render() {
    const {
      interval,
      paymentByWeekly,
      paymentByFortnightly,
      paymentByMonthly,
      selectedInterval,
    } = this.props

    if (interval) {
      return (
        <Fragment>
          <TabsNavigation>
            {interval.map((item, index: number) => (
              <TabsButton
                key={index}
                className={selectedInterval === item ? 'selected' : ''}
                onClick={this.onClickOfTab}
                value={item}
              >
                {item}
              </TabsButton>
            ))}
          </TabsNavigation>
          <TabsContent
            selectedTab={selectedInterval}
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