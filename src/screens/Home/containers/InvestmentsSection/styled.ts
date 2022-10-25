import styled from '@emotion/styled'
import { mediaQueries } from '~/common/mediaQueries'

export const GreenSection = styled.section`
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.green};
  padding-top: 12.4rem;

  ${mediaQueries.mobile} {
    padding: 12.4rem ${(props) => props.theme.constants.paddingMobile} 0;
  }
`
