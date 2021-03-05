import { connect } from 'react-redux'
import { State } from 'lib/store/reducer'
import { getCounter } from 'lib/store/selectors'
import { increase } from 'lib/store/slices/appSlice'
import { DefaultTemplate, Container } from 'components'
import { NextSeo } from 'next-seo'

const mapState = (state: State) => ({
  counter: getCounter(state),
})

const mapDispatch = {
  handleIncrease: increase,
}

const connector = connect(mapState, mapDispatch)

export function FaqPage({ counter, handleIncrease }: ReturnType<typeof mapState> & typeof mapDispatch) {
  return (
    <DefaultTemplate>
      <NextSeo title="Home" />
      <Container>FaqPage</Container>
    </DefaultTemplate>
  )
}

export default connector(FaqPage)
