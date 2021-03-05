import React from 'react'
import { Button } from 'components'
import { x } from '@xstyled/styled-components'
import { RiSendPlane2Fill } from 'react-icons/ri'
import { Card, CardProps } from './Card'

export default {
  title: 'Design System/Atoms/Card',
  component: Card,
  args: { shadow: 'lg' },
  argTypes: {
    as: { table: { disable: true } },
    theme: { table: { disable: true } },
    forwardedAs: { table: { disable: true } },
    shadow: {
      control: { type: 'select', options: ['xs', 'sm', 'default', 'md', 'lg', 'xl', '2xl', 'inner', 'outline'] },
    },
  },
}

export const simple = ({ shadow }: Partial<CardProps>) => (
  <x.div display="flex" h="80vh" justifyContent="center" alignItems="center">
    <Card shadow={shadow} w="320px" p={12} m={10} mx="auto">
      <x.div display="flex" alignItems="center" justifyContent="space-between">
        <h2>My Money</h2>
        <Button size="sm" variant="success">
          <RiSendPlane2Fill /> &nbsp;Send Money
        </Button>
      </x.div>
      <x.ul fontSize="xl" mt={8}>
        <x.li my={2}>
          <x.strong color="black">USD:</x.strong> $9,323.00
        </x.li>
        <x.li my={2}>
          <x.strong color="black">ETH:</x.strong> 12.42
        </x.li>
        <x.li my={2}>
          <x.strong color="black">BTC:</x.strong> 0.52248
        </x.li>
      </x.ul>
    </Card>
  </x.div>
)

simple.storyName = 'Card'
