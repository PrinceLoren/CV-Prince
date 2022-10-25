import { useTranslation } from 'next-i18next'
import React, { FC } from 'react'
import { SpaceProps } from 'styled-system'
import { theme } from '~/common/theme'
import { News } from '~/components/News'
import { ForewordText } from '~/components/Typography'
import { Articles } from '~/screens/Home/containers/ArticlesSection/Articles'
import { BottomContent } from '~/screens/Home/containers/ArticlesSection/BottomContent'
import { ArticlesBlock, ContentWrapper, MainContent } from './styled'

export const ArticlesSection: FC<SpaceProps> = ({ ...props }) => {
  const { t } = useTranslation('articles')
  return (
    <MainContent {...props}>
      <ContentWrapper>
        <ForewordText color={theme.colors.red}>{t('title')}</ForewordText>
        <ArticlesBlock>
          <Articles />
          <News />
        </ArticlesBlock>
        <BottomContent />
      </ContentWrapper>
    </MainContent>
  )
}
