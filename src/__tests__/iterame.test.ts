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

    test('should be immutable', () => {
      const set = new Set([0, 1, 2, 3, 4, 5])
      const el = iterame(set)
      const piped = el.pipe(function * (it) {
        for (const v of it) {
          yield v
        }
      })

      expect(el.get()).toBe(set)
      expect(el.get()).not.toBe(piped.get())
    })
  })

  describe('to', () => {
    test('should get a object', () => {
      const set = new Set([
        { id: 1, name: 'one' },
        { id: 2, name: 'two' },
        { id: 3, name: 'three' },
        { id: 4, name: 'four' }
      ])

      const object = iterame(set).to((acc, v) => {
        acc[v.id] = v.name
        return acc
      }, {} as Record<number, string>)

      expect(object).toEqual({ 1: 'one', 2: 'two', 3: 'three', 4: 'four' })
    })

    test('should get a map', () => {
      const set = new Set([
        { id: 1, name: 'one' },
        { id: 2, name: 'two' },
        { id: 3, name: 'three' },
        { id: 4, name: 'four' }
      ])

      const map = iterame(set).to((acc, v) => {
        acc.set(v.id, v.name)
        return acc
      }, new Map<number, string>())

      expect(map).toBeInstanceOf(Map)
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

  describe('value', () => {
    test('should return the unique value', () => {
      const set = new Set([3])

      const item = iterame(set).value()
      expect(item).toEqual(3)
    })

    test('should throw an error because', () => {
      const set = new Set([0, 1, 2, 3, 4, 5])

      function error () {
        iterame(set).value()
      }

      expect(error).toThrowError()
    })
  })
})
