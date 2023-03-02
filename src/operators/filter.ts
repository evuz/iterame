import { PipeableFunction } from '../iterame'

type Filter<T> = (value: T, index: number) => boolean

export function filter<T> (test: Filter<T>): PipeableFunction<T, T> {
  return function * (iterator: Iterable<T>) {
    let i = 0
    for (const v of iterator) {
      console.log('filter =>', v)
      if (test(v, i)) yield v
      i++
    }
  }
}
