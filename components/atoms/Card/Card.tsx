import React, { ComponentProps } from 'react'
import { x } from '@xstyled/styled-components'
import type { Theme } from 'types'

export type CardProps = ComponentProps<typeof x.div> & {
  shadow?: keyof Theme['shadows']
  children: React.ReactNode
}

export function Card({ shadow = 'default', ...rest }: CardProps) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <x.div boxShadow={shadow} {...rest} />
  )
}
