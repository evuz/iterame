import { PipeableFunction } from '../iterame'
import { slice } from './slice'

export function take<T> (n: number): PipeableFunction<T, T> {
  return slice(0, n)
}
