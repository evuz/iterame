import { test, expect } from 'vitest'
import { iterame } from '../iterame'

test('Iterame', () => {
  expect(iterame(3, 2)).toBe(5)
})
