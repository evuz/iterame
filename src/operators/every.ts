import { PipeableFunction } from '../iterame'

type Every<T> = (value: T, index: number) => boolean

export function every<T> (test: Every<T>): PipeableFunction<T, boolean> {
  return function * (iterator: Iterable<T>) {
    let i = 0
    for (const v of iterator) {
      if (!test(v, i)) {
        yield false
        return
      }
      i++
    }
    yield true
  }
}
