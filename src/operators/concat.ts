import { PipeableFunction } from '../iterame'

export function concat<T> (...iterables: Iterable<T>[]): PipeableFunction<T, T> {
  return function * (it1: Iterable<T>) {
    for (const v of it1) {
      yield v
    }

    let it = iterables.shift()

    while (it) {
      for (const v of it) {
        yield v
      }
      it = iterables.shift()
    }
  }
}
