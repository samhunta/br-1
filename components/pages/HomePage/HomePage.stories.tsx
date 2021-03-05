import React from 'react'
import HomePage from './HomePage'

export default {
  title: 'Design System/Pages/HomePage',
  component: HomePage,
  parameters: {
    layout: 'fullscreen',
  },
}

export const connected = () => <HomePage />
connected.storyName = 'HomePage'
