import styled from '@emotion/styled'
import { mediaQueries } from '~/common/mediaQueries'

export const MainContent = styled.div`
  position: relative;
  display: grid;
  flex-direction: column;
  margin-top: 12rem;
  /* TODO: Replace Fallback background-image to blured */
  background: url('/img/jumbo.png'), url('/img/smallJumbo.png');
  background-repeat: no-repeat;
  background-size: 39rem auto;
  background-position-y: 55%;

  ${mediaQueries.tablet} {
    background-size: 70rem auto;
    background-position-x: 0;
    background-position-y: 90%;
    row-gap: 33rem;
  }

  ${mediaQueries.laptop} {
    background-size: 80rem auto;
    background-position-x: 125%;
    background-position-y: 50%;
    padding-bottom: 26rem;
    row-gap: 0;
  }

  ${mediaQueries.desktop} {
    background-size: 90rem auto;
    background-position-x: 130%;
    background-position-y: 180%;
  }
`
