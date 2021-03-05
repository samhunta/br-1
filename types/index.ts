import type { CSSProperties } from 'react'
import type { DefaultTheme as Theme } from 'styled-components'

export type CSSInterpolation = { [key: string]: any }
export type SerializedStyles = { [key: string]: any }

export type ThemeVariant = 'default' | 'primary' | 'danger' | 'warning' | 'success'

export interface APIClientConfig {
  websocketUrl: string
  openseaUrl: string
}

export type { Theme, CSSProperties }
