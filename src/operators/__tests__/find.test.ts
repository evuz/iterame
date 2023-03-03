import { test, expect, describe } from 'vitest'

import { iterame } from '../../iterame'
import { find } from '../find'

describe('Operators: find', () => {
  test('should find a correct number', () => {
    const set = new Set([0, 1, 2, 3, 4, 5])

    const item = iterame(set).pipe(find(v => v === 2)).value()
    expect(item).toEqual(2)
  })

  test('should find the first element', () => {
    const set = new Set([0, 1, 2, 3, 4, 5])

    const item = iterame(set).pipe(find(v => Boolean(v % 2))).value()
    expect(item).toEqual(1)
  })

  test('should return undefined if it doesn\'t find any occurrence', () => {
    const set = new Set([0, 1, 2, 3, 4, 5])

    const item = iterame(set).pipe(find(v => v === 10)).value()
    expect(item).toBeUndefined()
  })
})
