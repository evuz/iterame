export type PipeableFunction<T, K> = (iterator: Iterable<T>) => Generator<K, void>

export class Iterame<T> {
  constructor (private iterator: Iterable<T>) {}

  pipe<A>(fn: PipeableFunction<T, A>): Iterame<A>
  pipe<A, B>(fn1: PipeableFunction<T, A>, fn2: PipeableFunction<A, B>): Iterame<B>
  pipe<A, B, C>(fn1: PipeableFunction<T, A>, fn2: PipeableFunction<A, B>, fn3: PipeableFunction<B, C>): Iterame<C>
  pipe<A, B, C, D>(fn1: PipeableFunction<T, A>, fn2: PipeableFunction<A, B>, fn3: PipeableFunction<B, C>, fn4: PipeableFunction<C, D>): Iterame<D>
  pipe<A, B, C, D, E>(fn1: PipeableFunction<T, A>, fn2: PipeableFunction<A, B>, fn3: PipeableFunction<B, C>, fn4: PipeableFunction<C, D>, fn5: PipeableFunction<D, E>): Iterame<E>
  pipe (...fns: PipeableFunction<any, any>[]) {
    while (fns.length) {
      const fn = fns.shift()
      this.iterator = fn!(this.iterator)
    }

    return this
  }

  toArray (): T[] {
    const arr = []
    for (const value of this.iterator) {
      arr.push(value)
    }

    return arr
  }

  get (): Iterable<T> {
    return this.iterator
  }

  lenght (): number {
    const arr = this.toArray()
    return arr.length
  }

  value (): T | undefined {
    let i = 0
    let last: T | undefined

    for (const value of this.iterator) {
      if (i > 0) {
        throw Error('There are more than one value in the iterator')
      }
      last = value
      i++
    }

    return last
  }

  first (): T | undefined {
    // eslint-disable-next-line no-unreachable-loop
    for (const value of this.iterator) {
      return value
    }
  }

  last (): T | undefined {
    let last: T | undefined
    for (const value of this.iterator) {
      last = value
    }

    return last
  }
}

export function iterame<T> (iterator: Iterable<T>) {
  return new Iterame(iterator)
}
