import styled from '@emotion/styled'
import { color, ColorProps } from 'styled-system'
import { mediaQueries } from '~/common/mediaQueries'

export const MainContent = styled.div<ColorProps>`
  ${color};
  background-color: rgba(0, 0, 0, 0.24);
  border-radius: 1.6rem;
  max-height: 74.8rem;
  margin-top: 5rem;

  ${mediaQueries.tablet} {
    max-height: 56.8rem;
  }

  ${mediaQueries.laptop} {
    margin-top: 0;
    max-height: 100%;
  }
`
