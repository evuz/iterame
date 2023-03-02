export type PipeableFunction<T, K> = (iterator: Iterable<T>) => Generator<K, void>

export class Iterame<T> {
  constructor (private iterator: Iterable<T>) {}

  pipe (...fns: PipeableFunction<any, any>[]) {
    while (fns.length) {
      const fn = fns.shift()

      this.iterator = fn!(this.iterator)
    }

    return this
  }

  get () {
    return this.iterator
  }

  toArray () {
    const arr = []
    for (const value of this.iterator) {
      arr.push(value)
    }

    return arr
  }
}

export function iterame<T> (iterator: Iterable<T>) {
  return new Iterame(iterator)
}
