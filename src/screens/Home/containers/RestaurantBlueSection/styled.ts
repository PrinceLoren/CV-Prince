import styled from '@emotion/styled'
import { mediaQueries } from '~/common/mediaQueries'

export const RestaurantBlueSectionWrapper = styled.div`
  background: ${(props) => props.theme.colors.primary};
`

export const MainContent = styled.div`
  max-width: ${(props) => props.theme.constants.maxWidth};
  margin: 0 auto;
  padding: 15.7rem ${(props) => props.theme.constants.paddingMobile} 10rem;
  text-align: left;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 2.4rem;

  ${mediaQueries.mobile} {
    padding: 15.7rem ${(props) => props.theme.constants.paddingDesktop} 19rem;
  }

  ${mediaQueries.laptop} {
    grid-template-columns: repeat(2, 1fr);
  }
`
