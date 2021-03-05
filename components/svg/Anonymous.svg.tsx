import React, { ComponentProps } from 'react'

export default function AnonymousSvg(props: ComponentProps<'svg'>) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <svg width={65} height={41} viewBox="0 0 65 41" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd">
        <path
          d="M40.44 0c-5.42 0-7.933 7.822-7.933 7.822S29.993 0 24.573 0 0 18.33 0 18.33L21.693 35h21.601L65 18.33S45.86 0 40.44 0z"
          fill="#FFADBC"
          fillRule="nonzero"
        />
        <path
          d="M4.018 18.33S19.673 3.292 26.638.46A5.475 5.475 0 0024.487 0C19.072 0 0 18.33 0 18.33L21.616 35H29a9.881 9.881 0 01-6.027-2.08L4.018 18.33z"
          fill="#0027C9"
          fillRule="nonzero"
        />
        <path stroke="#394360" strokeLinecap="round" strokeLinejoin="round" d="M64 19H0" />
        <path d="M26 40V10s12 2.345 12 14.045V40" fill="#FFF" fillRule="nonzero" />
        <path
          d="M33 13c3.889 2.562 6.125 6.639 5.995 10.927V40M26 40V29"
          stroke="#394360"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M26 28l5.569-4.014c.894-.623 1.422-1.588 1.431-2.615V5h-7v23z" fill="#8DFEEA" fillRule="nonzero" />
        <rect fill="#4A4A4A" fillRule="nonzero" x={27} y={7} width={1} height={7} rx={0.49} />
      </g>
    </svg>
  )
}
