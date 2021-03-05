import { DefaultTemplate, Container } from 'components'
import { NextSeo } from 'next-seo'

export function CompanyPage() {
  return (
    <DefaultTemplate fixedHeader>
      <NextSeo title="Home" />
      <Container />
    </DefaultTemplate>
  )
}

export default CompanyPage
