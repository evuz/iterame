import { test, expect, describe } from 'vitest'

import { iterame } from '../../iterame'
import { slice } from '../slice'

describe('Operators: slice', () => {
  test('should take the first three numbers', () => {
    const set = new Set([0, 1, 2, 3, 4, 5])

    expect(iterame(set).pipe(slice(0, 3)).toArray()).toEqual([0, 1, 2])
  })

  test('should take the values between 2 and 5', () => {
    const set = new Set([0, 1, 2, 3, 4, 5, 7])
    const arr = iterame(set).pipe(slice(2, 5)).toArray()

    expect(arr).toEqual([2, 3, 4])
  })

  test('should take the length of iterable', () => {
    const set = new Set([0, 1, 2, 3])
    const arr = iterame(set).pipe(slice(0, 10)).toArray()

    expect(arr.length).toBe(4)
  })

  test('should take a empty array', () => {
    const set = new Set([0, 1, 2, 3])

    function error () {
      iterame(set).pipe(slice(1, 0)).toArray()
    }

    expect(error).toThrowError()
  })
})
