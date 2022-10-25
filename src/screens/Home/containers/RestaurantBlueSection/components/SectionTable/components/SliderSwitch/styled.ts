import styled from '@emotion/styled'
import { space, SpaceProps } from 'styled-system'
import { TabName } from '~/components/Typography'

export const SliderContent = styled.div<SpaceProps>`
  z-index: 3;
  display: flex;
  position: relative;
  ${space}
`
export const SlidingBackground = styled.div<{
  slideTo?: number
  columns: number
}>`
  position: absolute;
  z-index: 1;
  border-radius: 0.8rem;
  background-color: ${(props) => props.theme.colors.white};
  min-width: ${(props) => props.columns}%;
  top: 0;
  bottom: 0;
  left: 0;
  margin: 0.4rem 0;
  transition: transform ${(props) => props.theme.transitionTimes.short}
    cubic-bezier(0.25, 0.1, 0.49, 1.3);
  transform: translateX(${(props) => props.slideTo}%);
`

export const OptionText = styled(TabName)<{ selected?: boolean }>`
  z-index: 3;
  color: ${(props) =>
    props.selected ? props.theme.colors.primary : props.theme.colors.white};
  transition: color ${(props) => props.theme.transitionTimes.short} ease-in-out;
`

export const ClickableContainer = styled.div`
  cursor: pointer;
  z-index: 5;
  border-radius: 0.8rem;
  text-align: center;
  width: 100%;
  padding: 1rem 0;
`

export const Backdrop = styled.div`
  position: relative;
  padding: 0 0.4rem;
  border-radius: 0.8rem;
  background-color: rgba(0, 0, 0, 0.24);
  margin: 1.6rem;
`
