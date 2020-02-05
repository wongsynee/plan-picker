import React, { PureComponent } from 'react'

import {
  NavigationWrapper,
  Chevron,
} from './Navigation.style'

class Navigation extends PureComponent {
  public render() {
    return (
      <NavigationWrapper>
        <Chevron />
        <span>Back</span>
      </NavigationWrapper>
    )
  }
}

export default Navigation