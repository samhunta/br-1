import React from 'react'
import styled, { x } from '@xstyled/styled-components'

export interface LogoProps {
  width?: number | string
  height?: number | string
  scale?: number
  color?: string
  className?: string
}

export const Logo = styled(({ ...props }: LogoProps) => {
  return (
    <x.div color="br-blue-primary" fontSize={22} fontWeight="bold">
      <x.svg width={238} height={81} viewBox="0 0 238 81" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M233.767 18.435a4.284 4.284 0 00-2.298-2.39l-5.591-2.423a5.407 5.407 0 00-2.105-.456 5.329 5.329 0 00-1.817-4.144l-4.541-3.994c-1.764-1.553-4.504-1.41-6.097.32l-4.114 4.447c-1.107 1.206-1.584 2.777-1.381 4.304-.8.065-1.584.298-2.29.702l-5.307 2.995a4.218 4.218 0 00-2.036 2.616 4.164 4.164 0 00.445 3.222l3.056 5.173c.412.698.97 1.281 1.629 1.729a5.28 5.28 0 00-.654 3.875l1.263 5.842c.445 2.073 2.37 3.472 4.461 3.363.222-.012.45-.04.669-.089l5.988-1.247a5.502 5.502 0 003.037-1.774 5.476 5.476 0 003.205 1.447l6.086.614c2.369.243 4.507-1.46 4.76-3.792l.645-5.942a5.279 5.279 0 00-1.056-3.786 5.416 5.416 0 001.44-1.89l2.499-5.464a4.184 4.184 0 00.104-3.258zm-2.331 2.235l-2.499 5.464a3.02 3.02 0 01-1.656 1.549 1.222 1.222 0 00-.774 1.012c-.052.454.162.902.543 1.15a2.886 2.886 0 011.305 2.717l-.645 5.942c-.108 1-1.042 1.73-2.088 1.625l-6.085-.615a3.044 3.044 0 01-2.456-1.731 1.227 1.227 0 00-1.178-.719 1.216 1.216 0 00-1.096.838 3.004 3.004 0 01-2.261 1.978l-5.988 1.248c-1.021.214-2.026-.415-2.246-1.398l-1.263-5.841a2.858 2.858 0 011.015-2.84c.351-.293.519-.753.419-1.2a1.237 1.237 0 00-.875-.925 2.962 2.962 0 01-1.809-1.367l-3.057-5.174a1.74 1.74 0 01-.185-1.345c.128-.473.436-.872.875-1.117l5.307-2.995a3.136 3.136 0 011.365-.393c.373-.02.751.03 1.117.148a1.222 1.222 0 001.421-1.796 2.848 2.848 0 01.364-3.424l4.098-4.454a1.933 1.933 0 012.686-.141l4.548 3.993a2.867 2.867 0 01.755 3.297 1.226 1.226 0 001.532 1.642 3.135 3.135 0 012.285.079l5.59 2.423c.462.198.818.562.987 1.02.161.436.148.918-.051 1.35z"
          fill="#FF6F8A"
        />
        <path
          d="M223.607 20.517l-3.909 1.337a5.286 5.286 0 00-3.491-2.357l-.174-3.328a1.227 1.227 0 00-1.285-1.157 1.225 1.225 0 00-1.157 1.285l.174 3.328a5.296 5.296 0 00-3.328 2.929l-4.126-.748a1.22 1.22 0 10-.433 2.403l4.126.748A5.208 5.208 0 00211.189 28l-2.956 3.897a1.214 1.214 0 00.235 1.71c.239.179.526.263.801.249.343-.018.687-.182.908-.484l2.956-3.897a5.26 5.26 0 002.396.44 5.25 5.25 0 001.581-.335l2.497 3.68c.249.37.664.555 1.076.533a1.22 1.22 0 00.948-1.91l-2.496-3.68a5.247 5.247 0 001.357-4.05l3.908-1.345c.639-.217.978-.916.761-1.555a1.225 1.225 0 00-1.554-.737zm-11.169 4.304a2.822 2.822 0 012.668-2.963 2.818 2.818 0 012.964 2.668 2.823 2.823 0 01-2.669 2.964 2.817 2.817 0 01-2.963-2.669z"
          fill="#FF6F8A"
        />
        <path
          d="M17.55 40.75c-.255 11.815 10.03 22.185 21.845 21.93 11.73.255 22.1-10.115 21.93-21.93.17-11.815-10.2-22.185-21.93-21.93-5.525 0-10.115 2.295-13.43 6.12V2.5H17.55v38.25zm8.245 0c0-7.735 5.95-13.855 13.6-13.855 7.65 0 13.6 6.12 13.6 13.855s-5.95 13.855-13.6 13.855c-7.65 0-13.6-6.12-13.6-13.855zM63.602 40.75c-.255 11.815 10.115 22.185 21.93 21.93 5.865 0 11.475-3.23 13.515-7.395V62h8.33V40.75c.255-11.815-10.03-22.185-21.845-21.93-11.815-.255-22.185 10.115-21.93 21.93zm35.53 0c0 7.735-5.865 13.855-13.515 13.855s-13.685-6.12-13.685-13.855 5.95-13.855 13.685-13.855 13.515 6.12 13.515 13.855zM147.903 39.645c0-13.855-7.395-20.825-18.7-20.825s-18.7 6.97-18.7 20.825V62h8.33V39.645c0-8.5 3.655-12.75 10.37-12.75s10.37 4.25 10.37 12.75V62h8.33V39.645zM162.478 76.573A21.845 21.845 0 00172.508 79c11.815.255 22.185-10.115 21.93-21.93V40.75c.255-11.815-10.115-22.185-21.93-21.93-11.815-.255-22.185 10.115-21.93 21.93-.255 11.815 10.115 22.185 21.93 21.93 5.185 0 10.03-2.125 13.43-5.61v1.955c0 7.055-6.12 11.9-13.43 11.9-7.508 0-10.03-1.925-10.03-1.925v7.573zm23.63-35.823c0 7.735-5.865 13.855-13.515 13.855s-13.685-6.12-13.685-13.855 5.95-13.855 13.685-13.855 13.515 6.12 13.515 13.855z"
          fill="#222222"
        />
        <path d="M11.025 44.15V2.5H-.025v41.65h11.05zM-.11 62h11.05V50.865H-.11V62z" fill="#0000FF" />
      </x.svg>
    </x.div>
  )
})``
