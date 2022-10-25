import styled from '@emotion/styled'
import { color, ColorProps, space, SpaceProps } from 'styled-system'

export const MainContent = styled.div<SpaceProps & ColorProps>`
  position: relative;
  ${color}
  ${space}
`
