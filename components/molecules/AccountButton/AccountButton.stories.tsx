import React from 'react'
import { Button } from 'components'
import { x } from '@xstyled/styled-components'
import { RiSendPlane2Fill } from 'react-icons/ri'
import { AccountButton, AccountButtonProps } from './AccountButton'

export default {
  title: 'Design System/Atoms/AccountButton',
  component: AccountButton,
  args: { balance: '1,424,128', title: 'John Doe' },
  argTypes: {
    balance: { control: { type: 'text' } },
    avatarUrl: { control: { type: 'text' } },
    avatarColor: { control: { type: 'text' } },
    title: { control: { type: 'text' } }
  },
}

export const simple = ({ title, balance, avatarUrl, avatarColor }: Partial<AccountButtonProps>) => (
  <AccountButton title={title} balance={balance} avatarUrl={avatarUrl} avatarColor={avatarColor} />
)

simple.storyName = 'AccountButton'
