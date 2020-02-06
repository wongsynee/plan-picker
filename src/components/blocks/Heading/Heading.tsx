import React, { PureComponent } from 'react'

import {
  HeadingWrapper
} from './Heading.style'

class Heading extends PureComponent {
  public render() {
    return (
      <HeadingWrapper>
        <h1>Customise your plan</h1>
      </HeadingWrapper>
    )
  }
}

export default Heading