import React, { FC } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from '../ToastContainer'
import { StyledLayout, StyledMainContent } from './styled'
import { ChildrenProp } from '~/types/props'

export const Layout: FC<ChildrenProp> = ({ children, ...props }) => (
  <StyledLayout {...props}>
    <StyledMainContent>
      {children}
      <ToastContainer />
    </StyledMainContent>
  </StyledLayout>
)
