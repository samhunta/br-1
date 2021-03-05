import { ReactNode } from 'react'
import { x, css } from '@xstyled/styled-components'

export interface InputGroupProps {
    children: ReactNode,
}

const inputGroupStyles = css`
    display: inline-flex;
    vertical-align: middle;
    direction: row;
    
    > :first-child {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    > :last-child {
        margin-left: -1px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`

export function InputGroup({ children, ...props }: InputGroupProps) {
    return (
        <x.div css={inputGroupStyles} className="br-input-group" {...props}>
            {children}
        </x.div>
    )
}