import styled from '@emotion/styled'
import { mediaQueries } from '~/common/mediaQueries'

export const MainContent = styled.div`
  margin: 3.1rem -1rem 3.2rem 1.5rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;

  ${mediaQueries.laptop} {
    margin-right: 1.5rem;
    margin-left: 1.5rem;
  }

  ${mediaQueries.desktop} {
    margin: 3.1rem 2.2rem 0;
  }
`
