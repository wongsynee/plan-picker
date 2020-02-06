import styled from 'styled-components'

import { theme } from '../../../theme/Theme'

export const TabsNavigation = styled.nav`
  margin-top: 4rem;
  padding: 0rem 3vw;
`

export const TabsButton = styled.button`
  background: transparent;
  border: 0;
  color: ${theme.colours.santasGray};
  cursor: pointer;
  padding: 1rem 0;
  margin-right: 2rem;
  font-weight: ${theme.fontWeight.bold};
  font-size: 2rem;

  &.selected {
    color: ${theme.colours.blueRibbon};

    &::after {
      content: '';
      display: block;
      width: 3.5rem;
      height: .5rem;
      background-color: ${theme.colours.blueRibbon};
      margin-top: .5rem;
    }
  }
`

export const TabsContent = styled.section`
  margin: 3rem 3vw 0;
  border-radius: ${theme.borderRadius.default};
  box-shadow: ${theme.boxShadow.default};
  overflow: hidden;
`

export const TabsRow = styled.div`
  background-color: ${theme.colours.white};
  border-top: .1rem solid ${theme.colours.zircon};
  padding: 4rem;

  &:first-child {
    border-top: 0;
  }
`