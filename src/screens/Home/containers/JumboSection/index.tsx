import { useTranslation } from 'next-i18next'
import React, { FC } from 'react'
import { SpaceProps } from 'styled-system'
import { FlexDiv } from '~/SpacedElements'
import { ROUTES } from '~/common/routes'
import { Button } from '~/components/Button'
import { JumboText } from '~/screens/Home/containers/JumboSection/components/JumboText'
import { MainContent } from '~/screens/Home/containers/JumboSection/styled'
import { scrollToSection } from '~/utils/scrollTo'

export const JumboSection: FC<SpaceProps> = ({ ...props }) => {
  const { t } = useTranslation('jumbo')

  return (
    <MainContent {...props}>
      <JumboText pt="3rem" />
      <FlexDiv marginY="3rem">
        <Button
          onClick={() => scrollToSection('restaurantBlueSection')}
          mr="2.4rem"
          label={t('buttons.decision')}
        />
        <Button href={ROUTES.contact} white label={t('buttons.getBack')} />
      </FlexDiv>
    </MainContent>
  )
}
