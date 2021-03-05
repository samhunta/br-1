import React, { memo, useState, SyntheticEvent, ComponentProps } from 'react'
import styled, { x, css, useUp } from '@xstyled/styled-components'
import { MdLockOutline } from 'react-icons/md'
import { Link, AccountButton, Button } from 'components'

export type HeaderNavigationProps = ComponentProps<typeof x.nav> & {}

type MobileMenuButtonProps = {
  open?: boolean
  onClick?: (e: SyntheticEvent) => void
}

const StyledNavigation = styled.nav`
  > ul {
    display: flex;
    flex-direction: row;
    flex: 1 1 auto;
    align-items: center;
    list-style: none;
    display: inline-flex;
    height: ${(p) => p.theme.space[24]};
    padding: 0 ${(p) => p.theme.space[24]} 0 0;

    > li > :first-child {
      display: inline-flex;
      justify-content: center;
      align-items: center;
    }
  }

  [data-header~='fixed'] & > ul {
    padding: 0;
    /* > li { display: none } */
    
    > .headerNavigation-accountButton {
      display: list-item;
    }
  }
`

const NavLink = styled(Link).attrs({ prefetch: true })`
  padding: 0 ${(p) => p.theme.space[6]};
`

const getMenuList = () => (
  <ul>
    <li>
      <NavLink href="/send">Send</NavLink>
    </li>
    <li>
      <NavLink href="/create">Create</NavLink>
    </li>
    <li>
      <NavLink href="/discover">Discover</NavLink>
    </li>
    <li className="headerNavigation-accountButton">
      <AccountButton ml={4} balance="48,120" title="Kyle Rivers" />
    </li>
  </ul>
)

const MobileMenuButtonLine = styled.div`
  background: ${(p) => p.theme.colors['br-blue-primary']};
  height: 0.3rem;
  width: 3rem;
  margin-bottom: 0.5rem;
  transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
  will-change: transform;
  transform: rotate(0deg) translateX(0) scaleX(0.6);
  opacity: 1;

  &:first-child {
    transform-origin: 10% 10%;
  }
  &:last-child {
    transform-origin: 10% 90%;
  }
`

const MobileMenuButtonWrapper = styled.div
  .attrs({
    'data-clickable': 'true',
  })
  .withConfig({
    shouldForwardProp: (p, val) =>
      ['open', 'data-clickable', 'onClick', 'children', 'aria-expanded'].includes(p) && val(p),
  })<MobileMenuButtonProps>`
  ${(props) =>
    props.open &&
    css`
      ${MobileMenuButtonLine} {
        &:first-child {
          transform: rotate(45deg);
        }
        &:nth-child(2) {
          transform: translateX(1rem);
          opacity: 0;
        }
        &:last-child {
          transform: rotate(-45deg);
        }
      }
    `}
`

export const MobileMenuButton = ({ open = false, onClick }: MobileMenuButtonProps) => {
  return (
    <MobileMenuButtonWrapper aria-expanded={open} open={open} onClick={onClick}>
      <MobileMenuButtonLine />
      <MobileMenuButtonLine />
      <MobileMenuButtonLine />
    </MobileMenuButtonWrapper>
  )
}

export const HeaderNavigationDesktop = memo((props: HeaderNavigationProps) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <StyledNavigation role="navigation" {...props}>
      {getMenuList()}
    </StyledNavigation>
  )
})

export const HeaderNavigationMobile = memo((props) => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div {...props}>
      <MobileMenuButton open={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
    </div>
  )
})

export const HeaderNavigation = memo((props: HeaderNavigationProps) => {
  const HeaderComponent = useUp('md') ? HeaderNavigationDesktop : HeaderNavigationMobile
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <HeaderComponent {...props} />
  )
})
