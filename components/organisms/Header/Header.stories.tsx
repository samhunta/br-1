import React from 'react'
import { Container } from 'components'
import { Header } from './Header'

interface HeaderStoryProps {
  fixed: boolean
}

export default {
  title: 'Design System/Organisms/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    fixed: { control: 'boolean' },
  },
}

export const simple = ({ fixed }: HeaderStoryProps) => (
  <div style={{ height: '500vh' }}>
    <Header fixed={fixed} />
    <Container>
      <h1>Sample content</h1>
      <p>
        <em>Scroll down</em> to preview fixed header
      </p>
    </Container>
  </div>
)

simple.storyName = 'Header'
