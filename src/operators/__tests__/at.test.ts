import { test, expect, describe } from 'vitest'

import { iterame } from '../../iterame'
import { at } from '../at'

describe('Operators: at', () => {
  test('should return the index', () => {
    const set = new Set([0, 1, 2, 3, 4, 5])

    const item = iterame(set).pipe(at(3)).value()
    expect(item).toEqual(3)
  })

  test('should throw error with negative number', () => {
    const set = new Set([0, 1, 2, 3, 4, 5])

    function error () {
      iterame(set).pipe(at(-1)).value()
    }

    expect(error).toThrowError()
  })
})
