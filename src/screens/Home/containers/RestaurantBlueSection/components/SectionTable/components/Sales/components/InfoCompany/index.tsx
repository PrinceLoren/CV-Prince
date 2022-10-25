import { TFunction, Trans } from 'next-i18next'
import React, { FC } from 'react'
import { SpaceProps } from 'styled-system'
import { FlexDiv, SpacedDiv } from '~/SpacedElements'
import { TableText } from '~/components/Typography'
import { dataCompany } from '~/screens/Home/containers/RestaurantBlueSection/components/SectionTable/components/Sales/data'

interface IInfoCompany {
  t: TFunction
}

export const InfoCompany: FC<IInfoCompany & SpaceProps> = ({ t, ...props }) => (
  <SpacedDiv {...props}>
    <Trans
      values={{
        ...dataCompany(t),
      }}
      components={{
        red: <TableText small red />,
        normal: <TableText small mr=".4rem" />,
        separator: <FlexDiv />,
      }}
    >
      {t('salesModification.infoPt_one')}
    </Trans>
  </SpacedDiv>
)
