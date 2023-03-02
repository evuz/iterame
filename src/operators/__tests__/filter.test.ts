import { test, expect, describe } from 'vitest'

import { iterame } from '../../iterame'
import { filter } from '../filter'

describe('Operators: filter', () => {
  test('should filter strings', () => {
    const set = new Set([0, '1', 2, 3, '4'])

    expect(iterame(set).pipe(filter(v => typeof v === 'number')).toArray())
      .toEqual([0, 2, 3])
  })

  test('should filter the object without id', () => {
    const set = new Set([{ name: 0 }, { id: 10 }, { id: 20 }, { id: 30 }])

    expect(iterame(set).pipe(filter(v => v.id !== undefined)).toArray())
      .toEqual([{ id: 10 }, { id: 20 }, { id: 30 }])
  })
})
