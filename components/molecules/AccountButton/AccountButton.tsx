import React from 'react'
import { x } from '@xstyled/styled-components'
import { Button } from 'components'

export interface AccountButtonProps extends React.ComponentProps<typeof x.div> {
    avatarColor?: string
    title?: string
    avatarUrl?: string
    balance?: string
}

export function AccountButton({ avatarColor = 'br-pink', title, avatarUrl, ...rest } : AccountButtonProps) {
    return (
        <Button p={0} w="42px" h="42px" size="sm" borderRadius="30" {...rest}>
            <x.span display="flex" color="rgba(255,255,255,0.8)" justifyContent="center" alignItems="center" bg={avatarColor} borderRadius="30" w="42px" h="42px"> 
                {!!title && title.split(/\s+/g).map(x => x.charAt(0)).join('')}               
                {!!avatarUrl && <x.img alt={title} src={avatarUrl} objectFit="cover" borderRadius="30" w="42px" h="42px" />}
            </x.span>
        </Button>
    )
}