import React, { FC } from 'react'
import { StyledToastContainer } from './styled'

export const ToastContainer: FC = () => (
  <StyledToastContainer
    position="top-center"
    draggable={false}
    autoClose={5000}
    pauseOnHover={false}
  />
)
