import React, { FC } from 'react'
import { Ideas } from './Ideas'
import { AppointmentSectionStyled } from './styled'

export const AppointmentSection: FC = () => (
  <AppointmentSectionStyled>
    <Ideas />
  </AppointmentSectionStyled>
)
