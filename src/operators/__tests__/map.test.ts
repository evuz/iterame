import { test, expect, describe } from 'vitest'

import { iterame } from '../../iterame'
import { map } from '../map'

describe('Operators: map', () => {
  test('should map the numbers', () => {
    const set = new Set([0, 1, 2, 3])

    expect(iterame(set).pipe(map(v => v * 10)).toArray()).toEqual([0, 10, 20, 30])
  })

  test('should map the object', () => {
    const set = new Set([{ id: 0 }, { id: 10 }, { id: 20 }, { id: 30 }])

    expect(iterame(set).pipe(map(v => ({ name: v.id }))).toArray())
      .toEqual([{ name: 0 }, { name: 10 }, { name: 20 }, { name: 30 }])
  })
})
