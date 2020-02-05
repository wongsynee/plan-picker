import styled from 'styled-components'

import { theme } from '../../../theme/Theme'

export const NavigationWrapper = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  align-items: center;
  display: flex;
  justify-content: flex-start;
  padding: 2rem;
`
export const Chevron = styled.div`
  margin-right: .8rem;

  &::before {
    content: '';
    border-style: solid;
    border-width: .2rem .2rem 0 0;
    display: inline-block;
    width: 1rem;
    height: 1rem;
    position: relative;
    transform: rotate(-135deg);
  }
`

export default NavigationWrapper
