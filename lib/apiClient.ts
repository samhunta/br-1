import Web3 from 'web3'
import fetch from 'cross-fetch'
import { APIClientConfig } from 'types'
import api from './config/api'

interface IAPIClient {
  getWeb3: () => Web3
}

export class APIClient implements IAPIClient {
  web3: Web3 = null

  config: APIClientConfig

  constructor(config: APIClientConfig) {
    this.config = config
  }

  getWeb3() {
    const { config } = this

    if (typeof window !== 'undefined' && (window as any).ethereum !== undefined) {
      this.web3 = new Web3((window as any).ethereum)
      console.log('has ethere', window.web3=this.web3)
    } else {
      this.web3 = this.web3 || new Web3(
        new Web3.providers.WebsocketProvider(config.websocketUrl),
      )
    }

    return this.web3
  }

  async fetchUserNfts(address: string, offset: number = 0, limit: number = 50) {
    const res = await fetch(
      `${this.config.openseaUrl}/assets?order_direction=asc&offset=${offset}&limit=${limit}&owner=${encodeURIComponent(address)}`,
    ).then((r) => r.json())

    const assets = (res.assets || []).filter((x: { [key: string]: any }) => !!x.image_url)
    return assets
  }

  async fetchCollectionNfts(address: string, offset: number = 0, limit: number = 50) {
    const res = await fetch(
      `${
        this.config.openseaUrl
      }/assets?order_direction=asc&offset=${offset}&limit=${limit}&asset_contract_addresses=${encodeURIComponent(
        address,
      )}`,
    ).then((r) => r.json())

    const assets = (res.assets || []).filter((x: { [key: string]: any }) => !!x.image_url)
    return assets
  }

  async stakeToken(address: string, amount: number) {
  }

  async purchaseNft(address: string, offset: number = 0) {

  }
}

export default new APIClient(api)