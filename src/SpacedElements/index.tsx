import styled from '@emotion/styled'
import {
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
} from 'styled-system'

export const SpacedDiv = styled.div<
  SpaceProps & LayoutProps & ColorProps & PositionProps
>`
  ${color}
  ${space}
  ${layout}
  ${position}
`

export const FlexDiv = styled.div<
  FlexboxProps & SpaceProps & ColorProps & LayoutProps & PositionProps
>`
  display: flex;
  ${layout}
  ${flexbox}
  ${space}
  ${position}
  ${color}
`
