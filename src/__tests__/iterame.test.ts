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

  describe('first', () => {
    test('should get the first item', () => {
      const set = new Set([{ id: 2 }, { id: 3 }, { id: 4 }])

      const first = iterame(set).first()
      expect(first).toEqual({ id: 2 })
    })
  })

  describe('last', () => {
    test('should get the last item', () => {
      const set = new Set([{ id: 2 }, { id: 3 }, { id: 4 }])

      const last = iterame(set).last()
      expect(last).toEqual({ id: 4 })
    })
  })

  describe('length', () => {
    test('should return the iterator lenght', () => {
      const set = new Set([0, 1, 2, 3, 4, 5])

      const lenght = iterame(set).lenght()
      expect(lenght).toEqual(6)
    })
  })

  describe('at', () => {
    test('should return the index', () => {
      const set = new Set([0, 1, 2, 3, 4, 5])

      const item = iterame(set).at(3)
      expect(item).toEqual(3)
    })

    test('should return the index from tail', () => {
      const set = new Set([0, 1, 2, 3, 4, 5])

      expect(iterame(set).at(-1)).toEqual(5)
      expect(iterame(set).at(-4)).toEqual(2)
    })
  })
})
