import { useTranslation } from 'next-i18next'
import React, { FC } from 'react'
import { theme } from '~/common/theme'
import { TextBody } from '~/components/Typography'
import { useAnimatedText } from '~/hooks/useAnimatedText'
import { LeftPartStyled } from './styled'

export const LeftPart: FC = () => {
  const { t } = useTranslation('investments')
  const { elementRef, isInView } = useAnimatedText('slideInRight')

  return (
    <LeftPartStyled ref={elementRef} opacity={isInView ? 1 : 0}>
      <TextBody color={theme.colors.primary} mb="3rem">
        {t('investments.p1a')}
        <strong>{t('investments.p1b')}</strong>
        {t('investments.p1c')}
        <strong>{t('investments.p1d')}</strong>
        {t('investments.p1e')}
      </TextBody>
      <TextBody color={theme.colors.primary}>
        {t('investments.p2a')}
        <strong>{t('investments.p2b')}</strong>
        {t('investments.p2c')}
      </TextBody>
    </LeftPartStyled>
  )
}
