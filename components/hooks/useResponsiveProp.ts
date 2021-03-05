import { useMemo } from 'react'
import { useBreakpoints, useBreakpoint } from '@xstyled/styled-components'
import { isObject } from 'lodash'

export type responsiveValueTypes<T> = T | { [key: string]: T }

export function useResponsiveProp<T>(value: responsiveValueTypes<T>): T {
  const breakpoints = useBreakpoints()
  const bp = useBreakpoint() as string
  const viewportWidth = breakpoints[bp]
  const valueMem = useMemo(
    () =>
      Object.keys(value)
        .map((v, k) => `${k}:${v}`)
        .join(','),
    [value],
  )

  return useMemo(() => {
    if (!isObject(value)) {
      return value as T
    }

    if (bp in value) {
      return value[bp]
    }

    let match = '_'
    let newValue: T = value[match]

    Object.keys(value).forEach((x) => {
      if (breakpoints[x] <= breakpoints[bp]) {
        match = x
        newValue = value[match]
      }
    })

    return newValue

    // This is disabled because we use valueMem instead of value, since value is likely to change instance over time
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bp, breakpoints, viewportWidth, valueMem])
}
