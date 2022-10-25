import styled from '@emotion/styled'
import { mediaQueries } from '~/common/mediaQueries'

export const MainContent = styled.div`
  margin-top: 3.1rem;
  display: flex;
  justify-content: flex-start;
  border-top: 0.15rem dashed ${(props) => props.theme.colors.neutral200};

  ${mediaQueries.tablet} {
    justify-content: flex-end;
  }
`
