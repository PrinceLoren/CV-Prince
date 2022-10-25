import styled from '@emotion/styled'
import { space, SpaceProps } from 'styled-system'
import { mediaQueries } from '~/common/mediaQueries'

export const MainContent = styled.div<SpaceProps>`
  overflow: hidden;
  background: ${(props) => props.theme.colors.neutral100};

  ${space}
`

export const ContentWrapper = styled.div`
  max-width: ${(props) => props.theme.constants.maxWidth};
  margin: 8.5rem auto;
  display: flex;
  flex-direction: column;
  padding: 0 ${(props) => props.theme.constants.paddingMobile};

  ${mediaQueries.mobile} {
    padding: 0 ${(props) => props.theme.constants.paddingDesktop};
  }
`

export const ArticlesBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 3rem;
  column-gap: 1rem;
  margin-top: 2.4rem;

  ${mediaQueries.desktop} {
    row-gap: 0;
    grid-template-columns: 4fr 24rem;
  }
`
