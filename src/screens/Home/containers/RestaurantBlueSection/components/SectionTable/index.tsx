import { AnimatePresence, motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import React, { FC, ReactElement, useState } from 'react'
import { theme } from '~/common/theme'
import { useAnimatedText } from '~/hooks/useAnimatedText'
import { SliderSwitch } from '~/screens/Home/containers/RestaurantBlueSection/components/SectionTable/components/SliderSwitch'
import { MainContent } from './styled'
import { allTabs as tabs } from './tabs'

export const SectionTable: FC = () => {
  const { t } = useTranslation('smart')
  const [selectedTab, setSelectedTab] = useState<{
    label: string
    content: ReactElement
  }>(tabs(t)[0])

  const { elementRef, isInView } = useAnimatedText('slideInLeft')

  const sliderTabs = [
    {
      label: t('tabs.sales'),
      callback: (index: number) => setSelectedTab(tabs(t)[index]),
    },
    {
      label: t('tabs.person'),
      callback: (index: number) => setSelectedTab(tabs(t)[index]),
    },
    {
      label: t('tabs.shop'),
      callback: (index: number) => setSelectedTab(tabs(t)[index]),
    },
  ]

  return (
    <MainContent ref={elementRef} opacity={isInView ? 1 : 0}>
      <SliderSwitch options={sliderTabs} />
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={selectedTab ? selectedTab.label : 'empty'}
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: parseFloat(theme.transitionTimes.short) }}
        >
          {selectedTab?.content}
        </motion.div>
      </AnimatePresence>
    </MainContent>
  )
}
