import { useEffect } from 'react'
import { connect } from 'react-redux'
import { State } from 'lib/store/reducer'
import { emojify } from 'react-emojione'
import ReactTooltip from 'react-tooltip'
import apiClient from 'lib/apiClient'
import { increase } from 'lib/store/slices/appSlice'
import styled, { x, css, useUp } from '@xstyled/styled-components'
import { MdMoreHoriz, MdSearch, MdImage } from 'react-icons/md'
import { CgMusic, CgClose } from 'react-icons/cg'
import { RiSendPlane2Fill } from 'react-icons/ri'
import { DefaultTemplate, Input, Select, Card, InputGroup, Button, Grid, GridItem, Container, Link } from 'components'
import { NextSeo } from 'next-seo'

const mapState = (state: State) => ({
  // counter: getCounter(state),
})

const mapDispatch = {
  // handleIncrease: increase,
}

interface CollectionIconProps extends ComponentProps<typeof x.div> {
  size?: string | number
  bg?: string
  color?: string
  chars?: string
}

const CollectionIcon = ({ bg = 'br-pink', color = 'black', chars, size = 9, ...rest }: CollectionIconProps) => {
  return (
    <x.div mr={2} boxShadow="0 0 0 1px rgba(0,0,0,0.1) inset" w={size} h={size} borderRadius={3} display="inline-flex" alignItems="center" justifyContent="center" bg={bg} color={color} fontWeight="bold" lineHeight="0" fontSize={size + 9 - (chars.length * 3)} {...rest}>{chars}</x.div>
  )
}

const CollectionUl = styled.ul`
  margin-top: ${p => p.theme.space[4]};
  border: 1px solid ${p => p.theme.colors['gray-200']};
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 196px;
`

const CollectionLi = styled.li.withConfig({
  shouldForwardProp: (prop, val) => ['selected', 'children'].includes(prop) && val(prop)
})`
  padding: ${p => p.theme.space[3]};
  border-bottom: 1px solid transparent;
  font-size: ${p => p.theme.fontSizes.sm};
  vertical-align: middle;
  display: flex;
  flex-direction: row;
  align-items: center;

  ${p => p.selected && css`
    color: ${p => p.theme.colors['gray-700']};
    background: ${p => p.theme.colors['gray-100']};
    border-color: ${p => p.theme.colors['gray-200']};
    font-weight: ${p => p.theme.fontWeights.medium};

    svg {
      padding: 2px;
      border-radius: 3px;
      font-size: 16px;
      border: 1px solid rgba(255, 255, 255, 1);
      color: ${p => p.theme.colors.black};
      background: rgba(255, 255, 255, 0);
      border-color: rgba(255, 255, 255, 0.5);
      transition: all 0.1s ease-in-out;

      &:hover, &:focus {
        background: rgba(255, 255, 255, 1);
        border-color: rgba(0, 0, 0, 0.1);
        color: ${p => p.theme.colors['br-rejected']};
      }
    }
  `}

  &:hover, &:focus {
    color: ${p => p.theme.colors['br-blue-primary']}
  }
`

const ProductItem = styled(GridItem)`
  padding: ${p => p.theme.space[8]};
  border: 1px solid ${p => p.theme.colors['gray-200']};
  border-radius: 10px;
  width: 100%;
`

const ProductItemHead = styled(x.div)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${p => p.theme.space[4]};
`

const ProductItemFooter = styled(x.div)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.03);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  font-size: ${p => p.theme.fontSizes.sm};
  padding: ${p => p.theme.space[4]} ${p => p.theme.space[8]};
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 2px 2px 0 0 rgba(255, 255, 255, 0.5) inset;
  margin: -${p => p.theme.space[8]};
  margin-top: ${p => p.theme.space[8]};
  font-size: ${p => p.theme.fontSizes.sm};
`

const ProductItemMedia = styled(x.div)``

const SidebarWrap = styled.div`
  width: 100%;
  padding-right: ${p => p.theme.space[8]};
`

const connector = connect(mapState, mapDispatch)

export type BangTagPageProps = ReturnType<typeof mapState> & typeof mapDispatch & {
  assets: Array<{ [key: string]: any }>
  isCollection: boolean
}

const AssetTitle = styled(x.h3)`
  height: 22px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export async function getServerSideProps(ctx): Promise<BangTagPageProps> {
  const web3 = apiClient.getWeb3()
  const isCollection = (await web3.eth.getCode(ctx.query.bangtag) !== '0x')

  let assets = []

  if (isCollection) {
    assets = await apiClient.fetchCollectionNfts(ctx.query.bangtag)
  } else {
    assets = await apiClient.fetchUserNfts(ctx.query.bangtag)
  }

  return {
    props: { assets, isCollection }
  }
}

export function BangTagPage({ assets }: BangTagPageProps) {
  const isLg = useUp('lg')

  useEffect(() => {
    ReactTooltip.rebuild()
  }, [])

  return (
    <DefaultTemplate fixedHeader>
      <NextSeo title="Discover" />
      <Container>
        <Grid gap={4}>
          {isLg && (
            <GridItem gridColumn="span 6">
              <SidebarWrap>
                <x.div pb={8}>
                  <Input mt={2} type="search" size="sm" placeholder="Filter by collection" />
                  <CollectionUl mt={2}>
                    <CollectionLi selected>
                      <x.div flex="1 1 auto">
                        <CollectionIcon size={9} bg="yellow-400" chars="R" />
                        Rarible
                      </x.div>
                      <x.div style={{ float: 'right' }}>
                        <CgClose />
                      </x.div>
                    </CollectionLi>
                    <CollectionLi selected>
                      <x.div flex="1 1 auto">
                        <CollectionIcon size={9} bg="br-confirmed" chars="N" />
                        Nifty Gateway
                      </x.div>
                      <x.div style={{ float: 'right' }}>
                        <CgClose />
                      </x.div>
                    </CollectionLi>
                    <CollectionLi selected>
                      <x.div flex="1 1 auto">
                        <CollectionIcon size={9} bg="white" chars="SR" />
                        Super Rare
                      </x.div>
                      <x.div style={{ float: 'right' }}>
                        <CgClose />
                      </x.div>
                    </CollectionLi>
                    <CollectionLi>
                      <CollectionIcon size={9} bg="white" chars="m" />
                      Makers Place
                    </CollectionLi>
                    <CollectionLi>
                      <CollectionIcon size={9} bg="blue" color="white" chars="a" />
                      Async Art
                    </CollectionLi>
                    <CollectionLi>
                      <CollectionIcon size={9} bg="black" color="white" chars="S" />
                      So Rare
                    </CollectionLi>
                    <CollectionLi>
                      <CollectionIcon size={9} bg="orange-500" color="white" chars="WAX" />
                      WAX
                    </CollectionLi>
                    <CollectionLi>
                      <CollectionIcon size={9} bg="cyan-500" color="white" chars="BAE" />
                      Blockchain Art Exchange
                    </CollectionLi>
                    <CollectionLi>
                      <CollectionIcon size={9} bg="purple-500" color="white" chars="A" />
                      Audius
                    </CollectionLi>
                  </CollectionUl>
                </x.div>
                <x.div pb={4}>
                  <Input type="search" size="sm" placeholder="Filter by tribe" />
                  <CollectionUl mt={2}>
                    <CollectionLi selected>
                      <x.div flex="1 1 auto">
                        <CollectionIcon size={9} bg="black" color="green-600" chars="TR" />
                        &nbsp;TRASH
                      </x.div>
                      <x.div style={{ float: 'right' }}>
                        <CgClose />
                      </x.div>
                    </CollectionLi>
                    <CollectionLi selected>
                      <x.div flex="1 1 auto">
                        <CollectionIcon size={9} bg="purple-500" color="white" chars="c" />
                        &nbsp;COIN
                      </x.div>
                      <x.div style={{ float: 'right' }}>
                        <CgClose />
                      </x.div>
                    </CollectionLi>
                    <CollectionLi selected>
                      <x.div flex="1 1 auto">
                        <CollectionIcon size={9} pt={1} pr={1} bg="br-pink" chars="💮" />
                        &nbsp;BANG
                      </x.div>
                      <x.div style={{ float: 'right' }}>
                        <CgClose />
                      </x.div>
                    </CollectionLi>
                    <CollectionLi>
                      <CollectionIcon size={9} bg="black" color="white" chars="$S" />
                      &nbsp;SUDO squad
                    </CollectionLi>
                    <CollectionLi>
                      <CollectionIcon size={9} bg="brown" color="white" chars="Tt" />
                      &nbsp;TATR.tech
                    </CollectionLi>
                    <CollectionLi>
                      <CollectionIcon size={9} bg="pink-300" color="cyan-600" chars="b" />
                      &nbsp;$BASED
                    </CollectionLi>
                  </CollectionUl>
                </x.div>
              </SidebarWrap>
            </GridItem>
          )}
          <GridItem gridColumn={{ _: 'span 24', lg: 'span 18' }}>
            <x.div
              mb={4}
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              w="100%"
            >
              <x.h2 my={0} flex="0 0 auto">
                Discover
              </x.h2>
              <x.div
                display="inline-flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="flex-end"
                flex="0 0 300px"
              >
                <x.h3 my={0} mr={4}>
                  Sort by
                </x.h3>
                <Select w="100" size="sm">
                  <option>Trending</option>
                  <option>Recent</option>
                </Select>
              </x.div>
            </x.div>
            <Grid gap={4} gridTemplateColumns={{ _: 1, sm: 2, md: 2, lg: 3, xl: 4 }}>
              {assets.map((asset) => (
                <ProductItem key={asset.id} gridColumn="span 1">
                  <ProductItemHead>
                    <x.div
                      fontSize="xs"
                      display="flex"
                      flexDirection="row"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="50%"
                      color="gray-600"
                    >
                      <x.img
                        data-tip={asset.collection.name}
                        data-class="br-tooltip"
                        data-background-color="#fff"
                        data-border-color="#ccc"
                        data-text-color="#000"
                        data-border
                        src={asset.collection.image_url || (asset.creator && asset.creator.profile_img_url)}
                        alt={asset.collection.name}
                        borderRadius="50%"
                        objectFit="contain"
                        width={30}
                        height={30}
                      />
                    </x.div>
                    <Button borderRadius="50%" size="sm" fontSize="lg" border={0} px={2}>
                      <MdMoreHoriz />
                    </Button>
                  </ProductItemHead>
                  <x.div
                    position="relative"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius={4}
                    w="100%"
                    pt="100%"
                  >
                    <x.img
                      src={asset.image_preview_url}
                      position="absolute"
                      right="0"
                      bottom="0"
                      top="0"
                      left="0"
                      objectFit="contain"
                      w="100%"
                      h="100%"
                      mx="auto"
                      alt={asset.name}
                    />
                  </x.div>
                  <AssetTitle>
                    <Link href="/discover">{asset.name}</Link>
                  </AssetTitle>
                  <ProductItemFooter>
                    <x.div textShadow="1px 1px 0 rgba(255, 255, 255, 0.5)">
                      <x.div fontSize="xxs" color="gray-500">
                        1 OF{' '}
                        {Math.random() > 0.5 ? 1 : Math.floor(Math.random() * 3 + 1) * (Math.random() > 0.4 ? 10 : 1)}
                      </x.div>
                      <x.div fontSize="xs" fontWeight="medium" color="black">
                        ${(Math.random() * 1200).toFixed(2)}
                      </x.div>
                    </x.div>
                    <Button size="sm" px={4}>
                      Get
                    </Button>
                  </ProductItemFooter>
                </ProductItem>
              ))}
            </Grid>
          </GridItem>
        </Grid>
      </Container>
    </DefaultTemplate>
  )
}

export default connector(BangTagPage)
