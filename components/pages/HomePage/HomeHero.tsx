import { x, useDown } from '@xstyled/styled-components'
import { Button, Link, Input, InputGroup, GridItem, Grid } from 'components'
import { MdSearch } from 'react-icons/md'
const { default: Emojify } = require('react-emojione')

export function HomeHero() {
  const mdDown = useDown('md')
  const emojiSize = mdDown ? 32 : 55

  return (
    <Grid w="100%" gap={{ _: 2, md: 8 }}>
      <GridItem gridColumn={{ _: "span 24", md: "span 12" }}>
        <x.div my={{ _: 20, md: 0 }}>
          <Emojify style={{ width: emojiSize, height: emojiSize }}>
            <x.h1 lineHeight="tight" color="br-text">
              Govern and reward your community<br />
              for their collaborations and ideas.
            </x.h1>
            <Link href="/discover">
              <Button variant="primary" mt={{ _: 8, md: 14 }} size={{ _: 'md' }}>
                Create
              </Button>
            </Link>
            {' '}
            <Link href="/discover">
              <Button mt={{ _: 8, md: 14 }} size={{ _: 'md' }}>
                Discover
              </Button>
            </Link>
          </Emojify>
        </x.div>
      </GridItem>
      <GridItem gridColumn={{ _: "span 24", md: "span 12" }}>
        <x.h3>Lookup bangtag</x.h3>
        <Grid>
          <GridItem gridColumn="1 / max-width">
            <InputGroup>
              <Input placeholder="eg. !based" type="text" />
              {' '}
              <Button variant="primary">
                <MdSearch />
              </Button>
            </InputGroup>
            <x.div fontSize={13} color="gray-400" my={4}>
              A bangtag includes:
            </x.div>
            <ul>
              <li>&nbsp; (10,000) 💮&nbsp; Bang Rocks</li>
              <li>&nbsp; (1) ENS <code>.bangrocks.eth</code> subdomain</li>
              <li>&nbsp; (1) Governance ERC-20 token &amp; farm</li>
              <li>&nbsp; (1) Shared Non-fungible Multi token (ERC1155)</li>
              <li>&nbsp; Permission-based authentication</li>
            </ul>
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  )
}

export default HomeHero
