import React from 'react'
import { Logo, LogoProps } from './Logo'

export default {
  title: 'Design System/Atoms/Logo',
  component: Logo,
  argTypes: {
    scale: { control: { type: 'range', step: 0.1, min: 0.1, max: 3 } },
    height: { control: 'number' },
    width: { control: 'number' },
    color: { control: 'color' },
  },
}

export const simple = ({ scale, color, width, height }: LogoProps) => (
  <Logo scale={scale} color={color} width={width} height={height} />
)

simple.storyName = 'Logo'
