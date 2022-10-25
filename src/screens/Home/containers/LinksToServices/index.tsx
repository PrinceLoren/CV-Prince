import { useTranslation } from 'next-i18next'
import React, { FC } from 'react'
import { SpaceProps } from 'styled-system'
import { ColumnSection } from './ColumnSection'
import { dataFirstColumn, dataSecondColumn, dataThirdColumn } from './data'
import { LinksSection, LinksSectionInner } from './styled'

export const LinksToServices: FC<SpaceProps> = ({ ...props }) => {
  const { t } = useTranslation('linksToServices')
  return (
    <LinksSection {...props}>
      <LinksSectionInner>
        <ColumnSection data={dataFirstColumn(t)} title={t('title.sales')} />
        <ColumnSection data={dataSecondColumn(t)} title={t('title.people')} />
        <ColumnSection data={dataThirdColumn(t)} title={t('title.wholesale')} />
      </LinksSectionInner>
    </LinksSection>
  )
}
