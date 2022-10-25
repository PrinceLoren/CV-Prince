import React, { FC } from 'react'
import { Element } from 'react-scroll'
import { SpaceProps } from 'styled-system'
import { AppointmentSection } from './components/AppointmentSection'
import { InfoTextSection } from './components/InfoTextSection'
import { GreenSection } from './styled'

export const InvestmentsSection: FC<SpaceProps> = ({ ...props }) => (
  <Element name="investmentsSection" id="investmentsSection">
    <GreenSection {...props}>
      <InfoTextSection mb="10.5rem" />
      <AppointmentSection />
    </GreenSection>
  </Element>
)
