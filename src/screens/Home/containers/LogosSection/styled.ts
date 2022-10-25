import styled from '@emotion/styled'
import { mediaQueries } from '~/common/mediaQueries'

export const LogosSectionWrapper = styled.section`
  background: ${(props) => props.theme.colors.neutral100};
`

export const MainContent = styled.div`
  max-width: ${(props) => props.theme.constants.maxWidth};
  margin: 0 auto;
  padding: 7rem ${(props) => props.theme.constants.paddingMobile};

  ${mediaQueries.mobile} {
    padding: 7rem ${(props) => props.theme.constants.paddingDesktop} 7rem
      ${(props) => props.theme.constants.paddingDesktop};
  }
`
