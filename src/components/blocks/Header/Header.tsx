import React, { PureComponent } from 'react'

import { PRICE } from '../../../constants/variables'
import Logo from '../../../images/logo-openpay.png'
import IconCart from '../../../images/icon-cart.svg'
import {
  HeaderWrapper,
  LogoImage,
  IconImage,
  PriceWrapper,
} from './Header.style'

class Header extends PureComponent {
  public render() {
    return (
      <HeaderWrapper>
        <LogoImage src={Logo} alt="Openpay" />
        <PriceWrapper>
          <IconImage src={IconCart} alt="Icon cart" />
          <div>${PRICE}</div>
        </PriceWrapper>
      </HeaderWrapper>
    )
  }
}

export default Header