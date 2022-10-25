import { useTranslation } from 'next-i18next'
import React, { FC } from 'react'
import { ROUTES } from '~/common/routes'
import { Button } from '~/components/Button'
import { MainContent } from './styled'

export const BottomContent: FC = () => {
  const { t } = useTranslation('articles')

  return (
    <MainContent>
      <Button
        mt="1.6rem"
        secondary
        label={t('buttons.more')}
        href={ROUTES.articles}
      />
    </MainContent>
  )
}
