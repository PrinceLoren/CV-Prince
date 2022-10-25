import { TFunction } from 'next-i18next'

export interface IBenefitData {
  text: string
}

export const benefitData = (t: TFunction): IBenefitData[] => [
  { text: t('investments.p4') },
  { text: t('investments.p5') },
  { text: t('investments.p6') },
  { text: t('investments.p7') },
]
