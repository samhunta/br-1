import { Button, ButtonPropsExtended } from './Button'

export const WyreButton = (props: ButtonPropsExtended) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Button colorOverride="#0158FF" {...props} />
}
