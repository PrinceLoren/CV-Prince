import styled from '@emotion/styled'
import { space, SpaceProps } from 'styled-system'
import { mediaQueries } from '~/common/mediaQueries'

export const StyledLayout = styled.div`
  min-height: 100vh;
  overflow: hidden;
`

export const StyledMainContent = styled.div<SpaceProps>`
  display: flex;
  flex-direction: column;
  padding: 0 ${(props) => props.theme.constants.paddingMobile};
  max-width: ${(props) => props.theme.constants.maxWidth};
  margin: 0 auto;

  ${mediaQueries.mobile} {
    padding: 0 ${(props) => props.theme.constants.paddingDesktop};
  }

  ${space}
`
