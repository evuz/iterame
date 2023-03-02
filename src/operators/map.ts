import { PipeableFunction } from '../iterame'

type Mapper<T, K> = (value: T, index: number) => K

export function map<T, K> (mapper: Mapper<T, K>): PipeableFunction<T, K> {
  return function * (iterator: Iterable<T>) {
    let i = 0
    for (const v of iterator) {
      yield mapper(v, i)
      i++
    }
  }
}
