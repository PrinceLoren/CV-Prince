import styled from '@emotion/styled'
import { flexbox, FlexboxProps, space, SpaceProps } from 'styled-system'

export const SpacedDiv = styled.div<SpaceProps>`
  ${space}
`

export const FlexDiv = styled.div<FlexboxProps & SpaceProps>`
  display: flex;
  ${flexbox}
  ${space}
`
