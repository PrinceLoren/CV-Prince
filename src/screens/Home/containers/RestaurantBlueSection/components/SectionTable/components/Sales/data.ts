import { TFunction } from 'next-i18next'

export const dataCompany = (t: TFunction) => ({
  peoples: t('salesTransNamesPt1.peoples'),
  year: t('salesTransNamesPt1.year'),
  monthSales: t('salesTransNamesPt1.monthSales'),
  dailyUsers: t('salesTransNamesPt1.dailyUsers'),
  peoplesValue: t('salesTransValuesPt1.peoples'),
  yearValue: t('salesTransValuesPt1.year'),
  monthSalesValue: t('salesTransValuesPt1.monthSales'),
  dailyUsersValue: t('salesTransValuesPt1.dailyUsers'),
})

export const dataQerko = (t: TFunction) => ({
  peoples: t('salesTransNamesPt2.peoples'),
  increase: t('salesTransNamesPt2.increase'),
  qerkoUsers: t('salesTransNamesPt2.qerkoUsers'),
  year: t('salesTransNamesPt2.year'),
  peoplesValue: t('salesTransValuesPt2.peoples'),
  increaseValue: t('salesTransValuesPt2.increase'),
  qerkoUsersValue: t('salesTransValuesPt2.qerkoUsers'),
  yearValue: t('salesTransValuesPt2.year'),
})
