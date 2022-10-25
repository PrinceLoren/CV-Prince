import { TFunction } from 'next-i18next'

export interface IButtons {
  label: string
  link?: string
}

export interface IDataLinks {
  company: string
  buttons: IButtons[]
}

export const dataFirstColumn = (t: TFunction): IDataLinks[] => [
  {
    company: 'SEPTIM',
    buttons: [
      {
        label: t('label.first.septim1'),
        link: 'https://www.septim.cz/produkty/kontrola_napoju_vycepni_system',
      },
      {
        label: t('label.first.septim2'),
        link: 'https://www.septim.cz/sluzby/outsorcing',
      },
      {
        label: t('label.first.septim3'),
        link: 'https://www.septim.cz/produkty/ukazky_aplikaci',
      },
      {
        label: t('label.first.septim4'),
        link: 'https://www.septim.cz/produkty/pokladni_system_septim',
      },
    ],
  },
  {
    company: 'QERKO',
    buttons: [
      {
        label: t('label.first.qerko1'),
        link: 'https://qerko.com/#block-yui_3_17_2_1_1634907864962_8428',
      },
      {
        label: t('label.first.qerko2'),
        link: 'https://qerko.com/',
      },
      {
        label: t('label.first.qerko3'),
        link: 'https://qerko.com/pro-restauraci',
      },
      {
        label: t('label.first.qerko4'),
        link: 'https://qerko.com/pro-restauraci',
      },
      {
        label: t('label.first.qerko5'),
        link: 'https://qerko.com/pro-restauraci',
      },
    ],
  },
]

export const dataSecondColumn = (t: TFunction): IDataLinks[] => [
  {
    company: 'GRASON',
    buttons: [
      {
        label: t('label.second.grason1'),
        link: 'https://grason.cz/pro-restaurace',
      },
      {
        label: t('label.second.grason2'),
        link: 'https://grason.cz/grason-plan',
      },
      {
        label: t('label.second.grason3'),
        link: 'https://grason.cz/grason-plan',
      },
    ],
  },
  {
    company: 'QERKO',
    buttons: [
      {
        label: t('label.second.qerko1'),
        link: 'https://qerko.com/',
      },
      {
        label: t('label.second.qerko2'),
        link: 'https://qerko.com/pro-obsluhu',
      },
    ],
  },
  {
    company: 'SEPTIM',
    buttons: [
      {
        label: t('label.second.septim1'),
        link: 'https://www.septim.cz/produkty/slaboproude_instalace',
      },
      {
        label: t('label.second.septim2'),
        link: 'https://www.septim.cz/produkty/connect_smart_kitchen',
      },
      {
        label: t('label.second.septim3'),
        link: 'https://www.septim.cz/produkty/pagery',
      },
    ],
  },
]

export const dataThirdColumn = (t: TFunction): IDataLinks[] => [
  {
    company: 'PECOSTA',
    buttons: [
      {
        label: t('label.third.pecosta1'),
        link: 'https://pecosta.cz/',
      },
      {
        label: t('label.third.pecosta2'),
        link: 'https://pecosta.cz/',
      },
      {
        label: t('label.third.pecosta3'),
        link: 'https://pecosta.cz/',
      },
    ],
  },
  {
    company: 'PECOSTA',
    buttons: [
      {
        label: t('label.third.pecosta4'),
        link: 'https://pecosta.cz/',
      },
      {
        label: t('label.third.pecosta5'),
        link: 'https://pecosta.cz/',
      },
      {
        label: t('label.third.pecosta6'),
        link: 'https://pecosta.cz/',
      },
    ],
  },
]
