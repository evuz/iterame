import { test, expect, describe, vi } from 'vitest'

import { iterame } from '../iterame'

describe('Iterame', () => {
  test('should return an array', () => {
    const set = new Set([0, 1, 2, 3, 4, 5])
    const arr = iterame(set).toArray()

    expect(arr).instanceOf(Array)
    expect(arr).toEqual([0, 1, 2, 3, 4, 5])
  })

  test('should get the iterable', () => {
    const set = new Set([0, 1, 2, 3, 4, 5])
    const it = iterame(set).get()

    expect(it).toBe(set)
  })

  describe('pipe', () => {
    test('should call all functions', () => {
      const set = new Set([0, 1, 2, 3, 4, 5])
      const map = vi.fn()
      const filter = vi.fn()

      iterame(set).pipe(map, filter)

      expect(map).toBeCalledTimes(1)
      expect(filter).toBeCalledTimes(1)
    })
  })
})
