import styled from '@emotion/styled'
import { mediaQueries } from '~/common/mediaQueries'

export const TextWrapper = styled.div`
  display: flex;
  gap: 3rem;
  flex-direction: column;

  ${mediaQueries.tablet} {
    flex-direction: row;
    gap: 4.4rem;
  }
`
export const LinkGreen = styled.a`
  color: ${(props) => props.theme.colors.green};
  font-weight: 700;
`
