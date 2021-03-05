import React, { memo, forwardRef, useMemo } from 'react'
import { x, css, useTheme } from '@xstyled/styled-components'
import { flatten, isString } from 'lodash'
import type { CSSInterpolation, SerializedStyles, Theme, ThemeVariant } from 'types'
import { transparentize, darken, saturate } from 'polished'
import { useResponsiveProp } from 'components'

export interface ButtonProps {
  size?: keyof Theme['formSizes']
  as?: React.ElementType
  variant?: ThemeVariant
  colorOverride?: string
  type?: 'submit' | 'button' | 'reset'
  disabled?: boolean
  block?: boolean
  customCss?: any
  children?: React.ReactNode
}

export type ButtonPropsExtended = ButtonProps &
  ({ [prop: string]: any } & (React.ComponentPropsWithRef<'button'> & React.ComponentPropsWithRef<'a'>))

interface VariantStyles {
  color?: string
  borderColor?: string
  background?: string
  backgroundGradient?: string
  glow?: string | boolean
  hover?: VariantStyles
  disabled?: VariantStyles
  focus?: VariantStyles
  active?: VariantStyles
}

type VariantStylesWithStates = VariantStyles & Required<Pick<VariantStyles, 'hover' | 'focus' | 'active' | 'disabled'>>

type BaseSizeVars = {
  [size in keyof Theme['formSizes']]?: {
    fontSize: string | number
    height: string | number
    padding: string | number
    minWidth?: string | number
  }
}

const serializeVariantStyles = (styles: VariantStyles = {}): { [cssProp: string]: any } => {
  const variantStyles: CSSInterpolation = {
    color: styles.color,
    backgroundColor: styles.background,
    backgroundImage: styles.backgroundGradient,
    borderColor: styles.borderColor,
  }

  const willChange = ['box-shadow']
  const transitions = ['box-shadow 0.1s ease-in-out']

  if (styles.glow) {
    const col = isString(styles.glow)
      ? styles.glow
      : transparentize(0.7, saturate(0.8, `${variantStyles.backgroundColor}`))
    variantStyles.boxShadow = `0 0 0 3px ${col}`
  }

  variantStyles.willChange = willChange.join(',')
  variantStyles.transition = transitions.join(',')

  return variantStyles
}

const createVariantStyles = (
  theme: Theme,
  { variant, colorOverride, disabled }: Partial<ButtonProps>,
): SerializedStyles => {
  const { colors, gradients } = theme

  const styles: VariantStylesWithStates = {
    color: colors.white,
    borderColor: 'transparent',
    hover: {},
    focus: { glow: true },
    active: {},
    disabled: {},
  }

  if (colorOverride) {
    variant = 'default'
  }

  switch (variant) {
    case 'primary': {
      styles.background = colors['br-blue-primary']
      styles.hover.background = darken(0.05, colors['br-blue-primary'])
      break
    }
    case 'danger': {
      styles.background = colors['br-rejected']
      styles.hover.background = darken(0.05, colors['br-rejected'])
      break
    }
    case 'warning': {
      styles.background = colors['br-pending']
      styles.hover.background = darken(0.05, colors['br-pending'])
      break
    }
    case 'success': {
      styles.background = colors['br-confirmed']
      styles.backgroundGradient = gradients['br-confirmed']
      styles.hover.background = colors['br-confirmed']
      styles.hover.backgroundGradient = gradients['br-confirmed-2']
      styles.focus = { ...styles.hover, ...styles.focus }
      break
    }
    default: {
      if (colorOverride) {
        styles.background = colorOverride
        styles.hover.background = darken(0.05, colorOverride) || colorOverride
      } else {
        styles.color = colors['br-text-clickable']
        styles.borderColor = colors['br-border']
        styles.background = 'transparent'
        styles.focus.glow = 'rgba(0, 0, 0, 0.1)'
        styles.focus.color = colors['br-blue-primary']
        styles.focus.background = 'rgba(255, 255,255, 0.6)'
        styles.hover.color = colors.black
      }
      break
    }
  }

  if (!styles.focus.background) {
    styles.focus.background = styles.hover.background || styles.background
  }

  if (disabled) {
    Object.assign(styles, styles.disabled)
  }

  return css({
    ...serializeVariantStyles(styles),
    '&:hover': serializeVariantStyles(styles.hover),
    '&:focus, &.focus': serializeVariantStyles({ ...styles.hover, ...styles.focus }),
    '&:active,&[data-active]': serializeVariantStyles(styles.active),
  })
}

const createBaseButtonStyles = (theme: Theme, { size, block, disabled }: Partial<ButtonProps>): SerializedStyles => {
  const { fontSizes, formSizes, fontWeights, space, radii } = theme

  const sizeVars: BaseSizeVars = {
    xs: {
      fontSize: fontSizes.xs,
      height: formSizes.xs,
      padding: space[3],
      minWidth: 0,
    },
    sm: {
      fontSize: fontSizes.sm,
      height: formSizes.sm,
      padding: space[6],
      minWidth: 0,
    },
    md: {
      fontSize: fontSizes.lg,
      height: formSizes.md,
      padding: space[8],
    },
    lg: {
      fontSize: fontSizes['2xl'],
      height: formSizes.lg,
      padding: space[12],
    },
    xl: {
      fontSize: fontSizes['4xl'],
      height: formSizes.xl,
      padding: space[16],
    },
  }

  if (!size || !(size in sizeVars)) {
    size = 'md'
  }

  return css`
    --webkit-appearance: none;
    appearance: none;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid transparent;
    vertical-align: middle;
    justify-content: center;
    font-weight: ${fontWeights.medium};
    font-size: ${sizeVars[size]!.fontSize};
    height: ${sizeVars[size]!.height};
    padding: 0 ${sizeVars[size]!.padding};
    border-radius: ${radii.md};
    min-height: 1.5rem;
    min-width: ${'minWidth' in sizeVars[size]! ? sizeVars[size]!.minWidth : space[24]};
    will-change: box-shadow, transform;
    transition: box-shadow 0.5s ease-in-out, transform 0.5s ease-in-out;
    transform: scale(1);


    ${block &&
    `
      display: flex;
      width: 100%;
    `}

    ${disabled &&
    `
      user-select: none;
      pointer-events: none;
      opacity: 0.5;
    `}

    &:hover,
    &:focus {
      outline: 0;
    }

    &:active {
      transform: scale(0.95);
    }
  `
}

const xButton = forwardRef(
  (
    { variant, as = 'button', size = 'md', colorOverride, block, customCss, disabled, ...rest }: ButtonPropsExtended,
    ref,
  ) => {
    const theme = useTheme()
    size = useResponsiveProp(size)

    const btnStyles = useMemo(() => createBaseButtonStyles(theme, { block, disabled, size }), [
      block,
      disabled,
      size,
      theme,
    ])

    const variantStyles = useMemo(() => createVariantStyles(theme, { disabled, variant, colorOverride }), [
      disabled,
      theme,
      variant,
      colorOverride,
    ])

    if (as === 'button' || as === 'input') {
      if (!rest.type) rest.type = 'button'
      as = as === 'button' ? x.button : x.input
      rest.disabled = disabled
    } else {
      rest['data-disabled'] = disabled
    }

    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <x.button as={as} ref={ref as any} css={flatten([btnStyles, variantStyles, customCss && css(customCss)])} {...rest} />
    )
  },
)

export const Button = memo(xButton)
