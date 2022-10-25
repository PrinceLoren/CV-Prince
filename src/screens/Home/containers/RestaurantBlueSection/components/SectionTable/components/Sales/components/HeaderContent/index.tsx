import { useTranslation } from 'next-i18next'
import React, { FC } from 'react'
import { SpaceProps } from 'styled-system'
import { SpacedDiv } from '~/SpacedElements'
import { TableText, TabsLink } from '~/components/Typography'

export const HeaderContent: FC<SpaceProps> = ({ ...props }) => {
  const { t } = useTranslation('smart')
  const mainTextPt1 = t('salesModification.mainTextPt1')
  const mainTextPt2 = t('salesModification.mainTextPt2')

  return (
    <SpacedDiv {...props}>
      <TableText>
        {mainTextPt1}
        <TabsLink
          href="https://www.septim.cz/produkty/pokladni_system_septim"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('salesLink.system')}
        </TabsLink>
        {mainTextPt2}
        <TabsLink
          href="https://qerko.com/pro-restauraci"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('salesLink.app')}
        </TabsLink>
        .
      </TableText>
    </SpacedDiv>
  )
}
