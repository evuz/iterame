import { test, expect, describe } from 'vitest'

import { iterame } from '../../iterame'
import { take } from '../take'

describe('Operators: take', () => {
  test('should take the first three numbers', () => {
    const set = new Set([0, 1, 2, 3, 4, 5])

    expect(iterame(set).pipe(take(3)).toArray()).toEqual([0, 1, 2])
  })

  test('should take the first six numbers', () => {
    const set = new Set([0, 1, 2, 3, 4, 5, 7])
    const arr = iterame(set).pipe(take(6)).toArray()

    expect(arr.length).toBe(6)
  })

  test('should take the length of iterable', () => {
    const set = new Set([0, 1, 2, 3])
    const arr = iterame(set).pipe(take(10)).toArray()

    expect(arr.length).toBe(4)
  })

  test('should take a empty array', () => {
    const set = new Set([0, 1, 2, 3])
    const arr = iterame(set).pipe(take(0)).toArray()

    expect(arr).toEqual([])
  })
})
