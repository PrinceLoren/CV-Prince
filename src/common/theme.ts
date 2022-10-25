import { Theme } from '@emotion/react'
import { breakpoints } from './mediaQueries'

export const theme: Theme = {
  colors: {
    white: '#FFF',
    black: '#484848',
    primary: '#00169b',
    primaryLighter: '#233CD7',
    red: '#f42052',
    redLighter: '#A62342',
    green: '#1dc38c',
    darkBlue: '#001075',
    neutral100: '#f7f9fc',
    neutral200: '#c5c5c5',
  },
  fonts: {
    default: "'Poppins', sans-serif",
    table: "'IBM Plex Mono', sans-serif",
    title: "'Lora', serif",
  },
  transitionTimes: {
    short: '0.2s',
    medium: '0.7s',
    long: '1.3s',
  },
  breakpoints: [
    breakpoints.mobile,
    breakpoints.tablet,
    breakpoints.laptop,
    breakpoints.desktop,
  ],
  constants: {
    maxWidth: '128.8rem',
    paddingDesktop: '3.2rem',
    paddingMobile: '1.6rem',
  },
}
