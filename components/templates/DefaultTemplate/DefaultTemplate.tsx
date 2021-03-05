import styled from '@xstyled/styled-components'
import React from 'react'
import { Header, Footer } from 'components'

const Template = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

const StyledMain = styled.mainBox`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
`

interface DefaultTemplateProps {
  py?: number
  fixedHeader?: boolean
  children: React.ReactNode
}

export function DefaultTemplate({ py = 0, fixedHeader = false, children }: DefaultTemplateProps) {
  return (
    <Template>
      <Header fixed={fixedHeader} />
      <StyledMain py={py}>{children}</StyledMain>
      <Footer />
    </Template>
  )
}
