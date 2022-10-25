import React, { FC } from 'react'
import { H4 } from '~/components/Typography'
import { CompanyLinks } from '../CompanyLinks'
import { IDataLinks } from '../data'
import { ColumnSectionStyled } from './styled'

interface IProps {
  data: IDataLinks[]
  title: string
}

export const ColumnSection: FC<IProps> = ({ data, title }) => (
  <ColumnSectionStyled>
    <H4 ml="0.7rem" mb="2.4rem">
      {title}
    </H4>
    <CompanyLinks ml="1.5rem" data={data} />
  </ColumnSectionStyled>
)
