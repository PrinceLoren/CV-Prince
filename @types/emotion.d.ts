import '@emotion/react'
import CSS from 'csstype'

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface Theme {
    colors: {
      white: CSS.Property.Color
      black: CSS.Property.Color
      primary: CSS.Property.Color
      primaryLighter: CSS.Property.Color
      red: CSS.Property.Color
      redLighter: CSS.Property.Color
      green: CSS.Property.Color
      darkBlue: CSS.Property.Color
      neutral100: CSS.Property.Color
      neutral200: CSS.Property.Color
    }
    fonts: {
      default: string
      table: string
      title: string
    }
    transitionTimes: {
      short: string
      medium: string
      long: string
    }
    breakpoints: CSS.Property.Width[]
    constants: {
      maxWidth: CSS.Property.MaxWidth
      paddingDesktop: CSS.Property.Padding
      paddingMobile: CSS.Property.Padding
    }
  }
}
