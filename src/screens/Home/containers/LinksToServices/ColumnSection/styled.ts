import styled from '@emotion/styled'
import { mediaQueries } from '~/common/mediaQueries'

export const ColumnSectionStyled = styled.div`
  max-width: 28rem;
  width: 100%;
  border-left: 0.15rem dashed ${(props) => props.theme.colors.neutral200};

  ${mediaQueries.laptop} {
    margin: 0;
    max-width: 42.5rem;
  }
`
