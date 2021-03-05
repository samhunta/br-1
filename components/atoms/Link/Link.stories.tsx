import React from 'react'
import { Button } from 'components'
import { Link, LinkProps } from './Link'

interface StoryLinkProps extends LinkProps {
  label?: string
}

export default {
  title: 'Design System/Atoms/Link',
  component: Link,
  argTypes: {
    label: { control: 'text' },
    href: { control: 'text' },
    target: { control: 'text' },
    rel: { control: 'text' },
    as: { control: 'text' },
    replace: { control: 'boolean' },
    anchor: { control: 'boolean' },
    scroll: { control: 'boolean' },
    shallow: { control: 'boolean' },
    passHref: { control: 'boolean' },
    prefetch: { control: 'boolean' },
  },
}

export const simple = ({
  label,
  href,
  as,
  replace,
  target,
  rel,
  scroll,
  shallow,
  passHref,
  prefetch,
}: StoryLinkProps) => (
  <>
    This is a standard{' '}
    <Link
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
      prefetch={prefetch}
      target={target}
      rel={rel}
    >
      {label}
    </Link>
    , click it.
  </>
)

simple.args = {
  label: 'link that goes somewhere',
  href: 'https://spankchain.com',
  target: '_blank',
}

export const linkUsingButtonAsElement = ({ label, href, rel, target, as, anchor, passHref }: StoryLinkProps) => (
  <>
    <Link href={href} as={as} passHref={passHref} target={target} rel={rel} anchor={anchor}>
      <Button>{label}</Button>
    </Link>
  </>
)

linkUsingButtonAsElement.args = {
  anchor: false,
  label: 'Here is a button link',
  href: 'https://spankchain.com',
  target: '_blank',
}
linkUsingButtonAsElement.argTypes = {
  replace: { table: { disable: true } },
  scroll: { table: { disable: true } },
  shallow: { table: { disable: true } },
  passHref: { table: { disable: true } },
  prefetch: { table: { disable: true } },
}
