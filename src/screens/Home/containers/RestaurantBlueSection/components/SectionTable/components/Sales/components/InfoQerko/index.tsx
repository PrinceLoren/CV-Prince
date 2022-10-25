import { TFunction, Trans } from 'next-i18next'
import React, { FC } from 'react'
import { FlexDiv } from '~/SpacedElements'
import { TableText } from '~/components/Typography'
import { dataQerko } from '~/screens/Home/containers/RestaurantBlueSection/components/SectionTable/components/Sales/data'

interface IInfoQerko {
  t: TFunction
}

export const InfoQerko: FC<IInfoQerko> = ({ t }) => (
  <Trans
    values={{
      ...dataQerko(t),
    }}
    components={{
      red: <TableText small red />,
      normal: <TableText small mr=".4rem" />,
      separator: <FlexDiv />,
    }}
  >
    {t('salesModification.infoPt_sec')}
  </Trans>
)
