import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../next-i18next.config'
import { Home } from '../src/screens/Home'

export const getStaticProps: GetStaticProps = async (ctx) => ({
  props: {
    ...(await serverSideTranslations(
      ctx.locale ?? 'cs',
      [
        'common',
        'jumbo',
        'logos',
        'landing',
        'articles',
        'smart',
        'linksToServices',
        'investments',
        'appointment',
      ],
      nextI18NextConfig
    )),
  },
})

export default Home
