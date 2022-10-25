import { useTranslation } from 'next-i18next'
import React, { FC } from 'react'
import { theme } from '~/common/theme'
import { CheckMarkList } from '~/components/CheckMarkList'
import { TextBody } from '~/components/Typography'
import { useAnimatedText } from '~/hooks/useAnimatedText'
import { benefitData } from '../data'
import { RightPartStyled } from './styled'

export const RightPart: FC = () => {
  const { t } = useTranslation('investments')
  const { elementRef, isInView } = useAnimatedText('slideInLeft')

  return (
    <RightPartStyled ref={elementRef} opacity={isInView ? 1 : 0}>
      <TextBody mb="2.4rem" color={theme.colors.primary}>
        {t('investments.p3')}
      </TextBody>
      <CheckMarkList list={benefitData(t)} />
    </RightPartStyled>
  )
}
