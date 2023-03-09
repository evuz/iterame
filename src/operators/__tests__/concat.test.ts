import { test, expect, describe } from 'vitest'

import { iterame } from '../../iterame'
import { concat } from '../concat'

describe('Operators: concat', () => {
  test('should concat only one iterable', () => {
    const s1 = new Set([0, 1, 2, 3, 4])
    const s2 = new Set([4, 5, 6, 7, 8])

    const arr = iterame(s1).pipe(concat(s2)).toArray()

    expect(arr)
      .toEqual([0, 1, 2, 3, 4, 4, 5, 6, 7, 8])
  })

  test('should concat multiples iterables', () => {
    const s1 = new Set([0, 1, 2, 3, 4])
    const s2 = new Set([5, 6, 7, 8, 9])
    const s3 = new Set([0, 1, 2, 3, 4])
    const s4 = new Set([5, 6, 7, 8, 9])
    const s5 = new Set([0, 1, 2, 3, 4])
    const s6 = new Set([5, 6, 7, 8, 9])

    const arr = iterame(s1).pipe(concat(s2, s3, s4, s5, s6)).toArray()

    expect(arr)
      .toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  })
})
