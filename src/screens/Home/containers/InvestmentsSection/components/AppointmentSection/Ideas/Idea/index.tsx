import React, { FC } from 'react'
import { ROUTES } from '~/common/routes'
import { theme } from '~/common/theme'
import { Button } from '~/components/Button'
import { H4, IdeaText } from '~/components/Typography'
import { IIdeasData } from '../../data'
import { IdeaStyled, IdeaWrapper } from './styled'

// Replace TextBenefit for font after gas-16 merge

export const Idea: FC<IIdeasData> = ({ title, text, label }) => (
  <IdeaWrapper>
    <IdeaStyled>
      <H4 color={theme.colors.primary} mb="0.4rem">
        {title}
      </H4>
      <IdeaText color={theme.colors.black} mb="2.2rem">
        {text}
      </IdeaText>
      <Button href={ROUTES.contact} inverse label={label} />
    </IdeaStyled>
  </IdeaWrapper>
)
