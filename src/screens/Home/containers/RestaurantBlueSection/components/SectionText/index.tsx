import { useTranslation } from 'next-i18next'
import React, { FC } from 'react'
import { ROUTES } from '~/common/routes'
import { Button } from '~/components/Button'
import { CheckMarkList } from '~/components/CheckMarkList'
import {
  BigTitle,
  SmallText,
  SmallTitle,
  SmartText,
} from '~/components/Typography'
import { useAnimatedText } from '~/hooks/useAnimatedText'
import { sides } from '~/screens/Home/containers/RestaurantBlueSection/components/SectionTable/components/marks'
import { MainContent } from './styled'

export const SectionText: FC = () => {
  const { t } = useTranslation('smart')
  const { elementRef, isInView } = useAnimatedText('fadeIn')

  return (
    <MainContent ref={elementRef} opacity={isInView ? 1 : 0}>
      <SmallTitle>{t('smallTitle')}</SmallTitle>
      <BigTitle mt=".4rem" mb="1.4rem">
        {t('title')}
      </BigTitle>
      <SmartText white>{t('textPt1')}</SmartText>
      <SmartText white mt="2rem" mb="3rem">
        {t('textPt2')}
      </SmartText>
      <CheckMarkList secondary list={sides(t)} />
      <SmallText mt={['1rem', '1.5rem', '1.5rem', '2rem']}>
        {t('footerText')}
      </SmallText>
      <Button
        href={ROUTES.contact}
        mt={['1.5rem', '2rem', '2.5rem', '3rem']}
        white
        label={t('buttonGetBack')}
      />
    </MainContent>
  )
}
