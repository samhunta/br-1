import React, { memo, forwardRef, useMemo } from 'react'
import { x, css, useTheme } from '@xstyled/styled-components'
import { flatten, isString } from 'lodash'
import type { CSSInterpolation, SerializedStyles, Theme, ThemeVariant } from 'types'
import { transparentize, darken, saturate } from 'polished'
import { useResponsiveProp } from 'components'

export interface InputProps {
  validated?: boolean
  size?: keyof Theme['formSizes']
  as?: React.ElementType
  variant?: ThemeVariant
  colorOverride?: string
  disabled?: boolean
  block?: boolean
  customCss?: any
  children?: React.ReactNode
}

export type InputPropsExtended = InputProps &
  ({ [prop: string]: any } & (React.ComponentPropsWithRef<'input'>))

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
      : transparentize(0.7, saturate(0.8, `${variantStyles.borderColor}`))
    variantStyles.boxShadow = `0 0 0 1px ${col}`
  }

  variantStyles.willChange = willChange.join(',')
  variantStyles.transition = transitions.join(',')

  return variantStyles
}

const createVariantStyles = (
  theme: Theme,
  { variant, colorOverride, disabled, validated }: Partial<InputProps>,
): SerializedStyles => {
  const { colors, gradients } = theme

  const styles: VariantStylesWithStates = {
    color: colors['gray-700'],
    borderColor: colors['gray-400'],
    background: 'transparent',
    hover: { color: colors.black },
    focus: { glow: true },
    active: {},
    disabled: {},
  }
  
  if (colorOverride) {
    variant = 'default'
  }

  switch (variant) {
    case 'danger': {
      styles.hover.borderColor = colors['br-rejected']
      break
    }
    case 'warning': {
      styles.hover.borderColor = colors['br-pending']
      break
    }
    case 'success': {
      styles.hover.borderColor = colors['br-confirmed']
      break
    }
    default: {
      styles.color = colors['gray-700']
      styles.borderColor = colors['br-border']
      styles.background = 'transparent'
      styles.hover.color = colors.black
      styles.focus.borderColor = colors['br-blue-primary']
      break
    }
  }

  if (!styles.focus.borderColor) {
    styles.focus.borderColor = styles.hover.borderColor || styles.borderColor
  }

  if (disabled) {
    Object.assign(styles, styles.disabled)
  }

  const mergeStyles = {
    '&': {},
    '&:hover': serializeVariantStyles(styles.hover),
    '&:focus,&.focus': serializeVariantStyles({ ...styles.hover, ...styles.focus }),
  }

  if (validated) {
    mergeStyles['&'] = {
      ...mergeStyles['&:hover'],
      ...mergeStyles['&:focus,&.focus'],
    }
  }

  return css({
    ...serializeVariantStyles(styles),
    ...mergeStyles,
  })
}

const createBaseButtonStyles = (theme: Theme, { size, block, disabled }: Partial<InputProps>): SerializedStyles => {
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
    vertical-align: middle;
    appearance: none;
    display: inline-flex;
    flex-direction: row;
    position: relative;
    align-items: center;
    border: 1px solid transparent;
    justify-content: center;
    font-weight: ${fontWeights.medium};
    font-size: ${sizeVars[size]!.fontSize};
    height: ${sizeVars[size]!.height};
    padding: 0 ${sizeVars[size]!.padding};
    border-radius: ${radii.md};
    min-height: 1.5rem;
    width: 100%;
    min-width: ${'minWidth' in sizeVars[size]! ? sizeVars[size]!.minWidth : space[24]};
    will-change: box-shadow;
    transition: box-shadow 0.5s ease-in-out;

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
  `
}

const xInput = forwardRef(
  (
    { variant, as = 'input', size = 'md', colorOverride, block, customCss, disabled, validated, ...rest }: InputPropsExtended,
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

    const variantStyles = useMemo(() => createVariantStyles(theme, { disabled, variant, validated, colorOverride }), [
      disabled,
      validated,
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
      <x.input as={as} ref={ref as any} css={flatten([btnStyles, variantStyles, customCss && css(customCss)])} {...rest} />
    )
  },
)

export const Input = memo(xInput)
