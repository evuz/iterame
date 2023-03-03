import { PipeableFunction } from '../iterame'

type Some<T> = (value: T, index: number) => boolean

export function some<T> (test: Some<T>): PipeableFunction<T, boolean> {
  return function * (iterator: Iterable<T>) {
    let i = 0
    for (const v of iterator) {
      if (test(v, i)) {
        yield true
        return
      }
      i++
    }
    yield false
  }
}
