import { useTranslation } from 'next-i18next'
import React, { FC } from 'react'
import { HeaderContent } from '~/screens/Home/containers/RestaurantBlueSection/components/SectionTable/components/Sales/components/HeaderContent'
import { InfoCompany } from '~/screens/Home/containers/RestaurantBlueSection/components/SectionTable/components/Sales/components/InfoCompany'
import { InfoQerko } from '~/screens/Home/containers/RestaurantBlueSection/components/SectionTable/components/Sales/components/InfoQerko'
import { MainContent } from './styled'

export const Sales: FC = () => {
  const { t } = useTranslation('smart')

  return (
    <MainContent>
      <HeaderContent mr="4.2rem" mt="1.7rem" />
      <InfoCompany t={t} marginY="4.1rem" />
      <InfoQerko t={t} />
    </MainContent>
  )
}
