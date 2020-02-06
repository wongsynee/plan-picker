import React, { PureComponent } from 'react'

import {
  NavigationWrapper,
  NavigationButton,
  Chevron,
} from './Navigation.style'

class Navigation extends PureComponent {
  public render() {
    return (
      <NavigationWrapper>
        <NavigationButton>
          <Chevron />
          <span>Back</span>
        </NavigationButton>
      </NavigationWrapper>
    )
  }
}

export default Navigation