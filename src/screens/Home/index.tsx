import Head from 'next/head'
import React from 'react'
import { Layout } from '~/components/Layout'
import { Footer } from '~/containers/Footer'
import { HelpingRestaurants } from '~/containers/HelpingRestaurants'
import { PartnersLogos } from '~/containers/PartnersLogos'
import { ArticlesSection } from '~/screens/Home/containers/ArticlesSection'
import { InvestmentsSection } from '~/screens/Home/containers/InvestmentsSection'
import { LinksToServices } from '~/screens/Home/containers/LinksToServices'
import { LogosSection } from '~/screens/Home/containers/LogosSection'
import { RestaurantBlueSection } from '~/screens/Home/containers/RestaurantBlueSection'
import { JumboSection } from './containers/JumboSection'
import { SectionStretch } from './styled'

export const HOME_TEST_ID = 'home-page'

export const Home = () => (
  <>
    <Head>
      <title>Miton - Gastronauts</title>
      <meta
        name="description"
        content="Informativní stránka o Miton Gastronauts"
      />
    </Head>
    <Layout data-testid={HOME_TEST_ID}>
      <JumboSection />
      <HelpingRestaurants mb="13.7rem" />
      <PartnersLogos />
      <SectionStretch>
        <ArticlesSection mt="5rem" />
        <RestaurantBlueSection />
        <LinksToServices mt="-7.6rem" />
        <InvestmentsSection />
        <LogosSection />
        <Footer />
      </SectionStretch>
    </Layout>
  </>
)
