import { useTranslation } from 'next-i18next'
import React, { FC } from 'react'
import { SpaceProps } from 'styled-system'
import { H2, HeaderRedText } from '~/components/Typography'
import { useAnimatedText } from '~/hooks/useAnimatedText'
import { MainContent } from '~/screens/Home/containers/JumboSection/components/JumboText/styled'

export const JumboText: FC<SpaceProps> = ({ ...props }) => {
  const { t } = useTranslation('jumbo')
  const { elementRef, isInView } = useAnimatedText('fadeIn')

  return (
    <MainContent ref={elementRef} opacity={isInView ? 1 : 0} {...props}>
      <HeaderRedText>{t('title')}</HeaderRedText>
      <H2
        mt={['60%', '60%', '1rem', '1rem']}
        mr={['2rem', '3rem', '1rem', '45%', '35%']}
      >
        {t('subtitle')}
      </H2>
    </MainContent>
  )
}
