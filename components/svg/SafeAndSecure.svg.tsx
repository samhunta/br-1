import React, { ComponentProps } from 'react'

export default function SafeAndSecureSvg(props: ComponentProps<'svg'>) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <svg width={63} height={37} viewBox="0 0 63 37" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd">
        <g fillRule="nonzero">
          <path
            d="M44 37l-6.868-12.007c5.208-3.028 7.748-9.207 6.194-15.064C41.772 4.073 36.511 0 30.5 0c-6.01 0-11.272 4.073-12.826 9.93-1.554 5.856.986 12.035 6.194 15.063L17 37h27z"
            fill="#FFADBC"
          />
          <path
            d="M22.139 13.39C22.144 7.1 26.663 1.66 33 .315a13.766 13.766 0 00-7.74.552c-5.023 1.788-8.525 6.236-8.979 11.408-.454 5.171 2.223 10.13 6.863 12.715L16 37h5.9l7.144-12.01c-4.274-2.39-6.908-6.814-6.905-11.6z"
            fill="#0027C9"
          />
          <path
            d="M16.139 13.39C16.144 7.1 20.663 1.66 27 .315a13.766 13.766 0 00-7.74.552c-5.023 1.788-8.525 6.236-8.979 11.408-.454 5.171 2.223 10.13 6.863 12.715L10 37h5.9l7.144-12.01c-4.274-2.39-6.908-6.814-6.905-11.6z"
            fill="#8DFEEA"
          />
        </g>
        <g transform="rotate(-45 22.384 22.578)" stroke="#394360" strokeLinecap="round" strokeLinejoin="round">
          <rect transform="rotate(135 50.79 37.827)" x={38.652} y={31.758} width={24.277} height={12.139} rx={5.31} />
          <path d="M57.327 44.83L41.435 28.66l-2.806-2.856L35.873 23M54.526 34.559l-7.47 7.47M53.592 32.691l3.735 3.735M45.188 41.095l3.735 3.735M20.414 7.586l-3.352-3.352-2.439-2.44L13.414.587M42.36 26.128l-4.669 4.669M8.414 9.586l2.801 2.801M17.884 3.586l-7.47 7.47" />
        </g>
      </g>
    </svg>
  )
}
