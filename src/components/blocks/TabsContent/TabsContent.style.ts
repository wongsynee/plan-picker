import styled from 'styled-components'

import { theme } from '../../../theme/Theme'

export const TabsContentWrapper = styled.section`
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

  span {
    text-transform: capitalize;
  }
`