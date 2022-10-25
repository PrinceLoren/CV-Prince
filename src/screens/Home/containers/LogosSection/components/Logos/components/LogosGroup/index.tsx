import React, { FC } from 'react'
import {
  ILogosProps,
  LogoItem,
} from '~/screens/Home/containers/LogosSection/components/Logos/components/LogoItem'
import { MainContent } from '~/screens/Home/containers/LogosSection/components/Logos/components/LogosGroup/styled'

interface ILogosGroup {
  logos: ILogosProps[] | undefined
}

export const LogosGroup: FC<ILogosGroup> = ({ logos }) => (
  <MainContent>
    {logos?.map((item) => (
      <LogoItem key={item.label} {...item} />
    ))}
  </MainContent>
)
