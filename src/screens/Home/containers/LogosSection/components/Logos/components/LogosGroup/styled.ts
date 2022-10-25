import styled from '@emotion/styled'
import { mediaQueries } from '~/common/mediaQueries'

export const MainContent = styled.div`
  display: grid;
  margin-top: 2.4rem;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2.2rem;
  row-gap: 0.8rem;
  position: relative;

  ${mediaQueries.tablet} {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 6.2rem;
  }

  ${mediaQueries.laptop} {
    grid-template-columns: repeat(4, 1fr);
  }
`
