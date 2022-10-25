import styled from '@emotion/styled'
import { mediaQueries } from '~/common/mediaQueries'

export const ArticlesContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 0.9rem;
  row-gap: 4rem;

  ${mediaQueries.laptop} {
    grid-template-columns: 1fr;
    margin-right: 1rem;
  }
`
