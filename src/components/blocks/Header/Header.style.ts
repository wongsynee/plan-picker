import styled from 'styled-components'

import { theme } from '../../../theme/Theme'

export const HeaderWrapper = styled.header`
  background: ${theme.colours.white};
  padding: 2rem;
  display: flex;
  justify-content: space-between;
`

export const LogoImage = styled.img`
  max-width: 12rem;
`

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
`

export const IconImage = styled.img`
  max-width: 3rem;
  margin-right: .5rem;
`
