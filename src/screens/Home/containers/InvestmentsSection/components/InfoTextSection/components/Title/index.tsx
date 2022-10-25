import { useTranslation } from 'next-i18next'
import React, { FC } from 'react'
import { SpaceProps } from 'styled-system'
import { theme } from '~/common/theme'
import { H3 } from '~/components/Typography'
import { TitleWrapper } from './styled'

export const Title: FC<SpaceProps> = ({ ...props }) => {
  const { t } = useTranslation('investments')

  return (
    <TitleWrapper {...props}>
      <H3 color={theme.colors.white}>{t('investments.title')}</H3>
    </TitleWrapper>
  )
}
