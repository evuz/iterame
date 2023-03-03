import { PipeableFunction } from '../iterame'

type Find<T> = (value: T, index: number) => boolean

export function find<T> (test: Find<T>): PipeableFunction<T, T> {
  return function * (iterator: Iterable<T>) {
    let i = 0
    for (const v of iterator) {
      if (test(v, i)) {
        yield v
        break
      }
      i++
    }
  }
}
