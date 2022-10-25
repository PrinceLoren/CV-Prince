import styled from '@emotion/styled'
import { color, ColorProps, space } from 'styled-system'
import { mediaQueries } from '~/common/mediaQueries'

export const InfoTextWrapper = styled.div<ColorProps>`
  ${color};
  max-width: ${(props) => props.theme.constants.maxWidth};
  padding: 0 ${(props) => props.theme.constants.paddingMobile};
  margin: 0 auto;
  ${space}

  ${mediaQueries.laptop} {
    padding: 0 ${(props) => props.theme.constants.paddingDesktop};
  }
`
