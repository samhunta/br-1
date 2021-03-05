// / <reference types="next" />
// / <reference types="next/types/global" />

import 'styled-components'
import type { Attributes as XAttributes } from 'react'
import { DefaultTheme as XStyledDefaultTheme } from '@xstyled/styled-components'

declare module 'react' {
  export interface Attributes extends XAttributes {
    css?: any
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends XStyledDefaultTheme {
    formSizes: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
    }
    gridTemplateColumns: XStyledDefaultTheme['gridTemplateColumns'] & {
      13: string
      14: string
      15: string
      16: string
      17: string
      18: string
      19: string
      20: string
      21: string
      22: string
      23: string
      24: string
    }
    fontSizes: XStyledDefaultTheme['fontSizes'] & {
      'xxs': string
      '10xl': string
    }
    space: XStyledDefaultTheme['space'] & {
      0: string
    }
    colors: XStyledDefaultTheme['colors'] & {
      'br-text': string
      'br-border': string
      'br-text-clickable': string
      'br-header': string
      'br-blue-primary': string
      'br-blue-alt': string
      'br-pink': string
      'br-pink-dark': string
      'br-pink-inactive': string
      'br-pending': string
      'br-rejected': string
      'br-confirmed': string
    }
    gradients: {
      'br-confirmed': string
      'br-confirmed-2': string
    }
  }
}

declare module 'react-emojione' {
  declare let module: any
}
