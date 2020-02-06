import React, { Fragment, PureComponent } from 'react'

import {
  TabsNavigation,
  TabsButton,
  TabsContent,
  TabsRow,
} from './Tabs.style'

class Tabs extends PureComponent {
  public render() {
    return (
      <Fragment>
        <TabsNavigation>
          <TabsButton className="selected">Weekly</TabsButton>
          <TabsButton>Fortnightly</TabsButton>
          <TabsButton>Monthly</TabsButton>
        </TabsNavigation>
        <TabsContent>
          <TabsRow>hello</TabsRow>
          <TabsRow>hello</TabsRow>
          <TabsRow>hello</TabsRow>
        </TabsContent>
      </Fragment>
    )
  }
}

export default Tabs