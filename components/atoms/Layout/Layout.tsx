import React, { ComponentProps } from 'react'
import { x } from '@xstyled/styled-components'

export type XProps = ComponentProps<typeof x.div>

export const Container = (props: XProps) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <x.div px={{ _:  12 }} w="100%" mx="auto" {...props} />
  )
}

export const Grid = (props: XProps) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <x.div display="grid" gridAutoRows="max-content" gridTemplateColumns={24} {...props} />
  )
}

export const GridItem = (props: XProps) => {
  /* eslint-disable-next-line react/jsx-props-no-spreading */
  return <x.div {...props} />
}
