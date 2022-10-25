import { useTranslation } from 'next-i18next'
import React, { FC } from 'react'
import { SpaceProps } from 'styled-system'
import { ideasData } from '../data'
import { Idea } from './Idea'
import { IdeasWhiteArea } from './styled'

export const Ideas: FC<SpaceProps> = ({ ...props }) => {
  const { t } = useTranslation('appointment')

  return (
    <IdeasWhiteArea {...props}>
      {ideasData(t).map((idea) => (
        <Idea key={idea.title} {...idea} />
      ))}
    </IdeasWhiteArea>
  )
}
