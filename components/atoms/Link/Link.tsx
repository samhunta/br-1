import React, { memo } from 'react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'

export interface LinkProps extends NextLinkProps, Omit<React.ComponentProps<'a'>, keyof NextLinkProps> {
  anchor?: boolean
  target?: string
  rel?: string
}

export const Link = memo(
  ({ rel = 'noopener', anchor = true, href, as, replace, scroll, shallow, passHref, prefetch, ...rest }: LinkProps) => {
    const isRouterLink = !/^\w{0,15}:/.test(href.toString())

    if (isRouterLink) {
      return (
        <NextLink
          href={href}
          as={as}
          replace={replace}
          scroll={scroll}
          shallow={shallow}
          passHref={passHref}
          prefetch={prefetch}
        >
          {/* href is passed by NextLink */}
          {/* eslint-disable-next-line jsx-a11y/anchor-has-content,react/jsx-props-no-spreading */}
          {anchor ? <a {...rest} /> : (rest.children as never) || null}
        </NextLink>
      )
    }

    return (
      // eslint-disable-next-line jsx-a11y/anchor-has-content,react/jsx-props-no-spreading
      <a href={href.toString()} rel={rel} {...rest} />
    )
  },
)
