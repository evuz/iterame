# Iterame

[![npm version](https://badgen.net/npm/v/iterame)](https://www.npmjs.com/package/iterame)
![downloads](https://badgen.net/npm/dt/iterame)
![download size](https://badgen.net/bundlephobia/min/iterame)

## About
Iterame is an iterator library for transforming a collection in a single iteration.

## Installation
You can install iterame using npm:
```
$ npm install iterame
```

## Usage
```typescript
import { iterame, map } from 'iterame'

function * range (from, to) {
  while (from < to) { yield from++ }
}

// [0, 2, 4, 6, 8]
iterame(range(0, 5)).pipe(map(value => value * 2)).toArray()

// 0
iterame(range(0, 5)).pipe(map(value => value * 2)).first()

// 1
iterame(range(0, 5)).pipe(map(value => value * 2), at(2)).value()
```
    
## Operators
- ```at```
```typescript
// 1
iterame(range(0, 5)).pipe(at(1)).value()
```
- ```every```
```typescript
// true
iterame(range(0, 5)).pipe(every(v => v >= 0)).value()
```
- ```filter```
```typescript
// [3, 4]
iterame(range(0, 5)).pipe(filter(v => v > 2)).toArray()
```
- ```find```
```typescript
// 4
iterame(range(0, 5)).pipe(find(v => v > 3)).value()
```
- ```map```
```typescript
// [0, 2, 4, 6, 8]
iterame(range(0, 5)).pipe(map(value => value * 2)).toArray()
```
- ```slice```
```typescript
// [1, 2, 3]
iterame(range(0, 5)).pipe(slice(1, 3)).toArray()
```
- ```some```
```typescript
// false
iterame(range(0, 5)).pipe(some(v => v === 10)).value()
```
- ```take```
```typescript
// [0, 1, 2]
iterame(range(0, 5)).pipe(take(3)).toArray()
```

## How to create your own operator
Operators must fulfil this `type`
```typescript
type Operator<T, K> = (iterator: Iterable<T>) => Generator<K, void>
```
For example, to create an operator called `add` to add a value at the end of the initial iterator:
```typescript
function add<T> (value: T) {
  return function * (iterator: Iterable<T>) {
    for (const v of iterator) {
      yield v
    }
    yield value
  }
}

// [0, 1, 2, 3, 4, 10]
iterame(range(0, 5)).pipe(add(10))
```

## Motivation
To facilitate the use of structure as `map` or `set` and at the same time learn more about the iterators