import { TFunction } from 'next-i18next'

export interface IIdeasData {
  title: string
  text: string
  label: string
}

export const ideasData = (t: TFunction): IIdeasData[] => [
  {
    title: t('idea1.title'),
    text: t('idea1.text'),
    label: t('idea1.label'),
  },
  {
    title: t('idea2.title'),
    text: t('idea2.text'),
    label: t('idea2.label'),
  },
  {
    title: t('idea3.title'),
    text: t('idea3.text'),
    label: t('idea3.label'),
  },
  {
    title: t('idea4.title'),
    text: t('idea4.text'),
    label: t('idea4.label'),
  },
]
