import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styled, { x, useDown } from '@xstyled/styled-components'
import { Link, Input, HeaderSearch, Logo, HeaderNavigation, Container, useScrollPosition } from 'components'

const Tada = require('react-reveal/Tada')

type StyledHeaderProps = {
  min?: boolean
}

const StyledHeader = styled.headerBox<StyledHeaderProps>`
  width: 100%;
  border-top: 4px solid ${(p) => p.theme.colors['br-blue-primary']};
  transition: border-top 0.1s ease-in-out, top 0.3s ease-in-out;
  will-change: top, border-top;
  position: absolute;
  top: 0;

  &[data-header~='fixed'] {
    position: fixed;
    z-index: 2;
    border-top: 0;
    border-bottom: 1px solid ${(p) => p.theme.colors['blue-gray-200']};
    background: ${(p) => p.theme.colors.white};
  }
`

const HeaderContainer = styled(Container)`
  min-height: 233px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  [data-header~='fixed'] & {
    min-height: 60px;
  }

  ${Logo} {
    margin: 10px 0;
    [data-header~='fixed'] & {
      margin: 0;
      max-height: 51px;
      max-width: 100px;
    }
  }
`

interface HeaderProps {
  fixed?: boolean
}

export function Header(props: HeaderProps) {
  const isMobile = useDown('md')
  const isTop = useScrollPosition() < 180
  const { fixed: isDefFixed } = props
  const isFixed = isDefFixed || !isTop || isMobile
  const router = useRouter()

  return (
    <>
      <div style={{ height: isMobile || isDefFixed ? 71 : 233 }} />
      <StyledHeader data-header={`${isFixed ? 'fixed' : ''} ${isMobile ? 'mobile' : ''}`}>
        <HeaderContainer>
          <x.div display="flex" flexDirection="row" h="100%" alignItems="center" flex="1 1 auto">
            <Link href="/">
              {(router.pathname === '/'
                ? <Tada>
                    <Logo />
                  </Tada>
                : <Logo />)}
            </Link>
            {isDefFixed && <HeaderSearch />}
          </x.div>
          <x.div flex="0 1 auto">
            <HeaderNavigation />
          </x.div>
        </HeaderContainer>
      </StyledHeader>
    </>
  )
}
