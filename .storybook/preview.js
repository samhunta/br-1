import React from 'react'
import { withNextRouter } from 'storybook-addon-next-router'
import { Provider } from '../components/Provider'

export const decorators = [
  withNextRouter(),
  (Story) => (
    <Provider>
      <Story />
    </Provider>
  ),
]
