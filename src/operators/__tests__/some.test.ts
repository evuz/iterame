import { test, expect, describe, vi } from 'vitest'

import { iterame } from '../../iterame'
import { some } from '../some'

describe('Operators: some', () => {
  test('should return true', () => {
    const set = new Set([0, 1, 2, 3, 4, 5])

    const item = iterame(set).pipe(some(v => v > 0)).value()
    expect(item).toBeTruthy()
  })

  test('should return false', () => {
    const set = new Set([0, 1, 2, 3, 4, 5])

    const item = iterame(set).pipe(some(v => v < 0)).value()
    expect(item).toBeFalsy()
  })

  test('should call function one time', () => {
    const fn = vi.fn()
    const set = new Set([0, 1, 2, 3, 4, 5])

    iterame(set).pipe(some(v => {
      fn()
      return v >= 0
    })).value()
    expect(fn).toBeCalledTimes(1)
  })
})
