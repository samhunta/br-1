import { NextSeo } from 'next-seo'
import { DefaultTemplate, Container } from 'components'
import { HomeHero } from './HomeHero'
import { HomeWhatIs } from './HomeWhatIs'

export function HomePage() {
  return (
    <DefaultTemplate>
      <NextSeo title="Home" />
      <Container>
        <HomeHero />
      </Container>
      <HomeWhatIs />
    </DefaultTemplate>
  )
}

export default HomePage
