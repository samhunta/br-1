import React from 'react'
import styled, { x } from '@xstyled/styled-components'
import { Grid, GridItem, Container } from 'components'
import SpankPaySvg from 'components/svg/SpankPay.svg'
import SpankBankSvg from 'components/svg/SpankBank.svg'
import SpankModelsSvg from 'components/svg/SpankModels.svg'

const ProductItem = styled(GridItem).attrs({
  gridColumn: { _: 'span 24', lg: 'span 8' },
  my: { _: 24, md: 0 },
})`
  text-align: center;

  > div {
    padding: 0;

    > svg {
      height: 200px;
      margin: ${(p) => p.theme.space[12]} auto;
      max-width: 100%;
    }

    > h1 {
      font-weight: ${(p) => p.theme.fontWeights.normal};
      font-size: ${(p) => p.theme.fontSizes.sm};
    }
  }
`

export function HomeWhatIs() {
  return (
    <>
      <x.div w="100%" textAlign="center" p={10} bg="gray-100" my={{ _: 10, md: 24 }}>
        <Container>
          <x.h2 fontSize="5xl">What is Bang Rocks?</x.h2>
          <p>Bang Rocks is for teams, tribes, and churches to collaborate and invest in crypto projects.</p>      
        </Container>
      </x.div>
      <Container>
        <x.div textAlign="center" mb={8}>
          <x.h1>
            Features
          </x.h1>
        </x.div>
        <Grid gap={4}>
          <ProductItem>
            <div>
              <h1>Create Your Tribe</h1>
              <p>
                Create a bangtag for your governance. Token holders can vote, yield farm Bang Rocks, and trade. 
              </p>
            </div>
          </ProductItem>
          <ProductItem>
            <div>
              <h1>Collect &amp; Farm Rare Digital Assets</h1>
              <p>
                Banging rocks with tribes                
              </p>
            </div>
          </ProductItem>
          <ProductItem>
            <div>
              <h1>SpankBank</h1>
              <p>
                The SpankBank is a revolutionary model of cooperation for the adult industry: a merchant-owned credit
                system that controls the issuance of our BOOTY ERC20 stablecoin.
              </p>
            </div>
          </ProductItem>
        </Grid>        
      </Container>
    </>
  )
}

export default HomeWhatIs
