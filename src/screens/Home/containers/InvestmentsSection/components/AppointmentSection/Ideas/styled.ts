import styled from '@emotion/styled'
import { mediaQueries } from '~/common/mediaQueries'

export const IdeasWhiteArea = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  border-right: 0.15rem dashed ${(props) => props.theme.colors.neutral100};

  ${mediaQueries.tablet} {
    grid-template-columns: repeat(2, 1fr);
    margin: 0 3.2rem;
  }

  ${mediaQueries.laptop} {
    grid-template-columns: repeat(4, 1fr);
  }
`
