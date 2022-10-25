import { useTranslation } from 'next-i18next'
import React, { FC } from 'react'
import { LogosText } from '~/components/Typography'
import { Logos } from '~/screens/Home/containers/LogosSection/components/Logos'
import { LogosSectionWrapper, MainContent } from './styled'

export const LogosSection: FC = () => {
  const { t } = useTranslation('logos')

  return (
    <LogosSectionWrapper>
      <MainContent>
        <LogosText>{t('title')}</LogosText>
        <Logos />
      </MainContent>
    </LogosSectionWrapper>
  )
}
