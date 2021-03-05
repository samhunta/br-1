export type IAddressSocialInfo = {
  twitter?: string
  discord?: string
  telegram?: string
  instagram?: string
}

export type IAddressInfo = {
  name: string
  address: string
  displayName: string
  verified: boolean
  social: IAddressSocialInfo
  emoji?: string
  imageUrl?: string
  bannerImageUrl?: string
  externalUrl?: string
  twitterUrl?: string
  discordUrl?: string
  telegramUrl?: string
  websiteUrl?: string
}

export interface IAddress {
  info: IAddressInfo
  isVerified(): boolean
  toString(): string
}

export interface IModel {
  setBannerUrl(url: string): void
  setSocial(info: IAddressSocialInfo): void
}

function normalizeInfo(info: IAddressInfo) {
  return info
}

export class Address implements IAddress {
  info: IAddressInfo

  model: IModel

  constructor(info: IAddressInfo, model: IModel) {
    this.info = normalizeInfo(info)
    this.model = model
  }

  isVerified(): boolean {
    return this.info.verified
  }

  toString() {
    return this.info.address
  }
}
