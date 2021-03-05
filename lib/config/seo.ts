import type { DefaultSeoProps } from 'next-seo/lib/types'
import { tl } from 'lib/helpers'

const SEO: DefaultSeoProps = {
  title: 'Your body, your money',
  titleTemplate: '%s | Bang Rocks',
  description: tl`
    Bang Rocks is a revolutionary blockchain-based economic and technological platform for the adult industry.
    Our mission is to bring the core benefits of blockchain technologies—privacy, security, self-sovereign identity,
    and economic efficiency—to the world of adult entertainment.
  `,
}

export default SEO
