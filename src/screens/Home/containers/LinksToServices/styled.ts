import styled from '@emotion/styled'
import { space } from 'styled-system'
import { mediaQueries } from '~/common/mediaQueries'

export const LinksSection = styled.div`
  margin: 0 auto 4rem;
  max-width: ${(props) => props.theme.constants.maxWidth};
  ${space}

  ${mediaQueries.mobile} {
    padding: 0 ${(props) => props.theme.constants.paddingMobile};
  }

  ${mediaQueries.tablet} {
    margin-bottom: 18rem;
  }
`

export const LinksSectionInner = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  padding: 5.9rem ${(props) => props.theme.constants.paddingMobile};
  border-top-left-radius: 3.2rem;
  border-top-right-radius: 3.2rem;
  background-color: ${(props) => props.theme.colors.white};

  ${mediaQueries.laptop} {
    flex-wrap: nowrap;
  }
`
