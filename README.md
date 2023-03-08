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
```
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
```
// 1
iterame(range(0, 5)).pipe(at(1)).value()
```
- ```every```
```
// true
iterame(range(0, 5)).pipe(every(v => v >= 0)).value()
```
- ```filter```
```
// [3, 4]
iterame(range(0, 5)).pipe(filter(v => v > 2)).toArray()
```
- ```find```
```
// 4
iterame(range(0, 5)).pipe(find(v => v > 3)).value()
```
- ```map```
```
// [0, 2, 4, 6, 8]
iterame(range(0, 5)).pipe(map(value => value * 2)).toArray()
```
- ```slice```
```
// [1, 2, 3]
iterame(range(0, 5)).pipe(slice(1, 3)).toArray()
```
- ```some```
```
// false
iterame(range(0, 5)).pipe(some(v => v === 10)).value()
```
- ```take```
```
// [0, 1, 2]
iterame(range(0, 5)).pipe(take(3)).toArray()
```