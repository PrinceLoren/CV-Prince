import { TFunction } from 'next-i18next'
import React from 'react'
import { Sales } from '~/screens/Home/containers/RestaurantBlueSection/components/SectionTable/components/Sales'

export const allTabs = (t: TFunction) => [
  {
    label: t('tabs.sales'),
    content: <Sales />,
  },
  {
    label: t('tabs.person'),
    content: <Sales />,
  },
  {
    label: t('tabs.shop'),
    content: <Sales />,
  },
]
