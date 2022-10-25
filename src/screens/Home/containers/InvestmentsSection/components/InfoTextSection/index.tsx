import { useTranslation } from 'next-i18next'
import React, { FC } from 'react'
import { SpaceProps } from 'styled-system'
import { theme } from '~/common/theme'
import { ForewordText } from '~/components/Typography'
import { useAnimatedText } from '~/hooks/useAnimatedText'
import { TextSection } from './components/TextSection'
import { Title } from './components/Title'
import { InfoTextWrapper } from './styled'

export const InfoTextSection: FC<SpaceProps> = ({ ...props }) => {
  const { t } = useTranslation('investments')
  const { elementRef, isInView } = useAnimatedText('fadeIn')

  return (
    <InfoTextWrapper ref={elementRef} opacity={isInView ? 1 : 0} {...props}>
      <ForewordText mb="0.4rem" color={theme.colors.primary}>
        {t('investments.foreword')}
      </ForewordText>
      <Title mb="2rem" />
      <TextSection />
    </InfoTextWrapper>
  )
}
