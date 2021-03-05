import React from 'react'
import styled from '@xstyled/styled-components'
import { Container, Grid, GridItem } from './Layout'

export default {
  title: 'Design System/Atoms/Layout',
  component: Grid,
  subcomponents: { GridItem },
}

const PreviewText = styled.divBox`
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: ${(p) => p.theme.colors['br-pink-inactive']};
  color: ${(p) => p.theme.colors.white};
  &:hover,
  &:focus {
    outline: 0;
    background: ${(p) => p.theme.colors['br-blue-primary']};
  }
`
PreviewText.defaultProps = { tabIndex: 0 }

export const simple = () => (
  <Container>
    <Grid gap={4}>
      <GridItem gridColumn="span 24">
        <h1>Grid</h1>
        <p>
          Layout components: <code>Container</code>, <code>Grid</code>, and <code>GridItem</code>
        </p>
        <p>
          This is a preview of a 24-column CSS grid using the <code>Grid</code> component wrapped in a{' '}
          <code>Container</code> component.
        </p>
      </GridItem>
      <GridItem gridRow="span 2" gridColumn="span 8">
        <PreviewText>2 / 6</PreviewText>
      </GridItem>
      <GridItem gridRow="3 / 2" gridColumn="span 8">
        <PreviewText>2 / 6</PreviewText>
      </GridItem>
      <GridItem gridColumn="span 4">
        <PreviewText>1 / 6</PreviewText>
      </GridItem>
      <GridItem gridColumn="span 4">
        <PreviewText>1 / 6</PreviewText>
      </GridItem>
      <GridItem gridColumn="span 4">
        <PreviewText>1 / 6</PreviewText>
      </GridItem>
      <GridItem gridColumn="span 4">
        <PreviewText>1 / 6</PreviewText>
      </GridItem>
      <GridItem gridColumn="span 4">
        <PreviewText>1 / 6</PreviewText>
      </GridItem>
      <GridItem gridColumn="span 4">
        <PreviewText>1 / 6</PreviewText>
      </GridItem>
      <GridItem gridColumn="span 4">
        <PreviewText>1 / 6</PreviewText>
      </GridItem>
      <GridItem gridColumn="span 4">
        <PreviewText>1 / 6</PreviewText>
      </GridItem>
      <GridItem gridColumn="span 4">
        <PreviewText>1 / 6</PreviewText>
      </GridItem>
      <GridItem gridColumn="span 12">
        <PreviewText>3 / 6</PreviewText>
      </GridItem>
    </Grid>
  </Container>
)

simple.storyName = 'Grid'
