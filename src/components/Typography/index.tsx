import styled from '@emotion/styled'
import CSS from 'csstype'
import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system'
import { mediaQueries } from '~/common/mediaQueries'

// There is a confict with styled-system's ColorProps, so we'll have our own type
// more https://stackoverflow.com/questions/53711454/styled-system-props-typing-with-typescript
export interface ICustomColorProps {
  color?: CSS.Property.Color
  backgroundColor?: CSS.Property.Color
}

type IBaseTestProps = SpaceProps &
  TypographyProps &
  ICustomColorProps &
  LayoutProps

export const BaseText = styled('p')<IBaseTestProps>(
  (props) => ({
    'color': props.theme.colors.black,
    'fontFamily': props.theme.fonts.default,
    '&::selection': {
      color: props.theme.colors.white,
      backgroundColor: props.theme.colors.green,
    },
  }),
  color,
  space,
  layout,
  typography
)

// Heading-01
export const H1 = styled(BaseText.withComponent('h1'))<LayoutProps>`
  font-family: ${(props) => props.theme.fonts.title};
  font-weight: 700;
  font-size: 3.4rem;
  color: ${(props) => props.theme.colors.red};

  ${mediaQueries.tablet} {
    font-size: 5.6rem;
  }

  ${mediaQueries.laptop} {
    font-size: 7rem;
  }
`

export const H2 = styled(BaseText.withComponent('h2'))`
  font-weight: 500;
  font-size: 2.8rem;
  color: ${(props) => props.theme.colors.primary};

  ${mediaQueries.tablet} {
    font-size: 3.2rem;
  }
`
export const H3 = styled(BaseText.withComponent('h2'))`
  font-family: ${(props) => props.theme.fonts.title};
  font-weight: 700;
  font-size: 3.2rem;
  color: ${(props) => props.theme.colors.primary};

  ${color}
  ${mediaQueries.mobile} {
    font-size: 5.6rem;
  }
`
export const H4 = styled(BaseText.withComponent('h4'))`
  font-weight: 700;
  font-size: 2.4rem;
  color: ${(props) => props.theme.colors.primary};
`

export const HeaderText = styled(BaseText.withComponent('p'))<{
  menu?: boolean
}>`
  font-size: ${(props) => (props.menu ? '4.5rem' : '2rem')};
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};
`

export const SubText = styled(BaseText.withComponent('p'))`
  font-family: ${(props) => props.theme.fonts.default};
  font-size: 1.6rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.neutral200};
  transition: color ${(props) => props.theme.transitionTimes.short} ease;
`

export const TitleText = styled(BaseText.withComponent('p'))`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors};
`

export const ForewordText = styled(BaseText.withComponent('p'))`
  font-size: 1.6rem;
  font-weight: 700;
`

export const TextBody = styled(BaseText.withComponent('p'))<
  TypographyProps & SpaceProps & ColorProps
>`
  font-size: 2rem;
  font-weight: 500;
  ${typography}
  ${space}
  ${color}
`
export const LogosText = styled(BaseText.withComponent('p'))<{
  logoItem?: boolean
}>`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${(props) =>
    props.logoItem ? props.theme.colors.black : props.theme.colors.primary};
`

export const StarText = styled(BaseText.withComponent('p'))`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 1.6rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.neutral200};
`

export const Selecter = styled(BaseText.withComponent('p'))`
  font-size: 1.6rem;
  font-weight: 600;
`

export const FootnoteText = styled(BaseText.withComponent('p'))`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 1.2rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.black};
`
export const MarkText = styled(BaseText.withComponent('p'))<{
  secondary?: boolean
}>`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${(props) =>
    props.secondary ? props.theme.colors.green : props.theme.colors.primary};

  ${mediaQueries.tablet} {
    font-size: 2rem;
  }

  ${mediaQueries.desktop} {
    font-size: 2.4rem;
  }
`

export const BigTitle = styled(BaseText.withComponent('p'))`
  font-size: 3.6rem;
  color: ${(props) => props.theme.colors.white};

  ${mediaQueries.tablet} {
    font-size: 4.6rem;
  }

  ${mediaQueries.laptop} {
    font-size: 5.6rem;
  }
`

export const SmallTitle = styled(BaseText.withComponent('p'))`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.red};
`

export const SmallText = styled(BaseText.withComponent('p'))`
  font-size: 1.6rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.white};
`
export const TabName = styled(BaseText.withComponent('p'))`
  font-size: 1.2rem;
  font-weight: 600;

  ${mediaQueries.tablet} {
    font-size: 1.4rem;
  }
`

export const TableText = styled(BaseText.withComponent('p'))<{
  small?: boolean
  red?: boolean
}>`
  font-size: 1.2rem;
  font-family: ${(props) => props.theme.fonts.table};
  font-weight: 500;
  line-height: 1.56;
  ${(props) => props.red || (props.small && 'white-space: nowrap;')}
  color: ${(props) =>
    props.red ? props.theme.colors.red : props.theme.colors.neutral100};

  ${mediaQueries.tablet} {
    font-size: 1.6rem;
  }

  ${mediaQueries.laptop} {
    font-size: 1.6rem;
  }
`

export const SmartText = styled(BaseText.withComponent('p'))<{
  white?: boolean
}>`
  font-size: 2rem;
  font-weight: 500;
  color: ${(props) =>
    props.white ? props.theme.colors.neutral100 : props.theme.colors.black};
`

// ArticlesSection & News

export const ArticleTitle = styled(BaseText.withComponent('p'))<
  {
    big?: boolean
  } & ColorProps
>`
  ${color};
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 3.5rem;
  color: ${(props) =>
    props.big ? props.theme.colors.primary : props.theme.colors.black};

  ${mediaQueries.laptop} {
    font-size: ${(props) => (props.big ? '7.2rem' : '3.2rem')};
  }

  transition: all ${(props) => props.theme.transitionTimes.short} ease-in;
`

export const ArticleText = styled(BaseText.withComponent('span'))<{
  link?: boolean
}>`
  font-size: 1.6rem;
  font-weight: ${(props) => (props.link ? 700 : 400)};
  color: ${(props) =>
    props.link ? props.theme.colors.red : props.theme.colors.black};
`

export const TabsLink = styled(BaseText.withComponent('a'))`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.green};
  font-family: ${(props) => props.theme.fonts.table};

  ${mediaQueries.tablet} {
    font-size: 1.6rem;
  }
`

export const NewsTitle = styled(BaseText.withComponent('p'))`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.black};
`

export const NewsText = styled(BaseText.withComponent('p'))`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.black};
`
export const HeaderRedText = styled(BaseText.withComponent('p'))`
  font-family: ${(props) => props.theme.fonts.title};
  font-weight: 700;
  font-size: 7.4rem;
  color: ${(props) => props.theme.colors.red};

  ${mediaQueries.tablet} {
    font-size: 5.6rem;
  }

  ${mediaQueries.laptop} {
    font-size: 7rem;
  }
`
export const IdeaText = styled(BaseText.withComponent('p'))`
  font-size: 1.4rem;
  font-weight: 500;
`
