import React, { FC } from 'react'
import { SpaceProps } from 'styled-system'
import { SpacedDiv } from '~/SpacedElements'
import { LogosGroup } from '~/screens/Home/containers/LogosSection/components/Logos/components/LogosGroup'
import { transformDataToLogos } from '~/screens/Home/containers/LogosSection/utils'
import { useLogos } from '~/utils/actions/logos'

export const Logos: FC<SpaceProps> = ({ ...props }) => {
  const data = useLogos()

  return (
    <SpacedDiv {...props}>
      <LogosGroup logos={transformDataToLogos(data)} />
    </SpacedDiv>
  )
}
