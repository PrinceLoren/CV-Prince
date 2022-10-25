import React, { FC } from 'react'
import { LeftPart } from './LeftPart'
import { RightPart } from './RightPart'
import { TextWrapper } from './styled'

export const TextSection: FC = () => (
  <TextWrapper>
    <LeftPart />
    <RightPart />
  </TextWrapper>
)
