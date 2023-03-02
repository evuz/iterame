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

  first () {
    // eslint-disable-next-line no-unreachable-loop
    for (const value of this.iterator) {
      return value
    }
  }

  last () {
    let last
    for (const value of this.iterator) {
      last = value
    }

    return last
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
