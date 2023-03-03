import { test, expect, describe, vi } from 'vitest'

import { iterame } from '../../iterame'
import { every } from '../every'

describe('Operators: every', () => {
  test('should return true', () => {
    const set = new Set([0, 1, 2, 3, 4, 5])

    const item = iterame(set).pipe(every(v => v >= 0)).value()
    expect(item).toBeTruthy()
  })

  test('should return false', () => {
    const set = new Set([0, 1, 2, 3, 4, 5])

    const item = iterame(set).pipe(every(v => v > 0)).value()
    expect(item).toBeFalsy()
  })

  test('should call function two time', () => {
    const fn = vi.fn()
    const set = new Set([0, 1, 2, 3, 4, 5])

    iterame(set).pipe(every(v => {
      fn()
      return v < 1
    })).value()
    expect(fn).toBeCalledTimes(2)
  })
})
