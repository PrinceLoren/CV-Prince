import styled from '@emotion/styled'
import { mediaQueries } from '~/common/mediaQueries'

export const IdeaWrapper = styled.div`
  border-left: 0.15rem dashed ${(props) => props.theme.colors.neutral100};
  padding: 0 ${(props) => props.theme.constants.paddingMobile};
`

export const IdeaStyled = styled.div`
  max-width: 20.7rem;
  margin: 0 auto;
  margin-bottom: 5rem;

  ${mediaQueries.laptop} {
    margin-bottom: 15.8rem;
  }
`
