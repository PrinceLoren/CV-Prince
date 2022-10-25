import React, { FC } from 'react'
import { Element } from 'react-scroll'
import { SectionTable } from '~/screens/Home/containers/RestaurantBlueSection/components/SectionTable'
import { SectionText } from '~/screens/Home/containers/RestaurantBlueSection/components/SectionText'
import {
  MainContent,
  RestaurantBlueSectionWrapper,
} from '~/screens/Home/containers/RestaurantBlueSection/styled'

export const RestaurantBlueSection: FC = () => (
  <Element name="restaurantBlueSection" id="restaurantBlueSection">
    <RestaurantBlueSectionWrapper>
      <MainContent>
        <SectionText />
        <SectionTable />
      </MainContent>
    </RestaurantBlueSectionWrapper>
  </Element>
)
