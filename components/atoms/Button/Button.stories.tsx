import React from 'react'
import { Button, ButtonProps } from './Button'
import { WyreButton } from './WyreButton'

interface ButtonStoryArgs extends ButtonProps {
  label: string
}

export default {
  title: 'Design System/Atoms/Button',
  component: Button,
  argTypes: {
    size: { control: { type: 'select', options: ['sm', 'md', 'lg'] } },
    label: { control: 'text' },
    customCss: { control: 'text' },
    variant: { control: { type: 'select', options: ['primary', 'default', 'danger', 'warning', 'success'] } },
    colorOverride: { control: 'color' },
    type: { control: { type: 'select', options: ['button', 'submit', 'reset'] } },
    block: { control: 'boolean' },
    disabled: { control: 'boolean' },
    as: { table: { disable: true } },
    theme: { table: { disable: true } },
  },
}

export const simple = ({ type, size, colorOverride, customCss, disabled, label, block, variant }: ButtonStoryArgs) => (
  <Button
    size={size}
    colorOverride={colorOverride}
    type={type}
    disabled={disabled}
    variant={variant}
    customCss={customCss}
    block={block}
  >
    {label}
  </Button>
)
simple.storyName = 'Button'
simple.args = {
  label: 'Complete Survey',
  variant: 'primary',
}

export const wyreButton = ({ type, size, customCss, disabled, label, block, variant }: ButtonStoryArgs) => (
  <WyreButton size={size} type={type} disabled={disabled} variant={variant} customCss={customCss} block={block}>
    {label}
  </WyreButton>
)

wyreButton.argTypes = {
  colorOverride: { table: { disable: true } },
  variant: { table: { disable: true } },
}

wyreButton.args = {
  label: 'Pay Now',
}
