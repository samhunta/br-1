import React from 'react'
import { action } from '@storybook/addon-actions'
import { CounterWidget } from './CounterWidget'

export default {
  title: 'Design System/Molecules/CounterWidget',
  component: CounterWidget,
}

export const Simple = () => <CounterWidget counter={1} onClickIncrease={action('onClickIncrease')} />
