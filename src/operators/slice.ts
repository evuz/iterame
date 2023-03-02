import { PipeableFunction } from '../iterame'

export function slice<T> (to: number, from: number): PipeableFunction<T, T> {
  if (to > from) {
    throw Error('from should be greater than to')
  }
  return function * (iterator: Iterable<T>) {
    let i = 0
    for (const v of iterator) {
      if (i >= to && i < from) {
        yield v
      }
      i++
    }
  }
}
