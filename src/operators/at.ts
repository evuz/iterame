import { PipeableFunction } from '../iterame'
import { slice } from './slice'

export function at<T> (n: number): PipeableFunction<T, T> {
  if (n < 0) {
    throw Error('n have to be greater than 0')
  }
  return slice(n, n + 1)
}
