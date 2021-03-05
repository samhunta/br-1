import React, { useState } from 'react'
import styled, { x, css, useUp } from '@xstyled/styled-components'
import { MdSearch } from 'react-icons/md'
import { Input } from 'components'

const StyledSearchInput = styled.div.withConfig({
    shouldForwardProp: (prop, val) => !['focus'].includes(prop) && val(prop)
})`
    position: relative;
    padding-left: ${p => p.theme.space[8]};
    transition: max-width 0.15s ease-in-out;
    max-width: 300px;
    width: 60%;
    display: flex;
    flex-direction: row;

    ${p => p.focus && css`
        max-width: 400px;
    `}

    > div {
        flex: 1 1 auto;

        > span {
            position: absolute;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            display: flex;
            flex-direction: row;
            align-items: center;
            font-size: ${p => p.theme.fontSizes.sm};
            pointer-events: none;
            color: ${p => p.theme.colors['gray-400']};
            top: 4px;
            left: ${p => p.theme.space[12]};
            right: 0;

            > svg {
                flex: 0 0 auto;
            }

            > span {
                flex: 0 1 auto;
                opacity: 1;
                transition: opacity 0.1s ease-in-out;
            }
        }

        > input {
            padding-left: 30px;
            width: 100%;
            border-radius: 14px;
        }

        > input:focus + span > span,
        > input:valid + span > span {
            opacity: 0;
        }
    }
`

export function HeaderSearch() {
    const [focus, setFocus] = useState(false)
    const isMd = useUp('md')

    return (
        <StyledSearchInput focus={focus}>
            <x.div>
                <Input size="sm" minLength="1" required onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} type="search" />
                <x.span>
                    <MdSearch size={16} color="#666" />
                    <x.span>    
                        &nbsp;{isMd ? 'Search bangtag, token, or NFT' : 'Search'}
                    </x.span>
                </x.span>
            </x.div>
        </StyledSearchInput>
    )
}
