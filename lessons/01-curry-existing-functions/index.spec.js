import { curry, curryN } from 'ramda'
import { add } from './index'

describe('R.curry', () => {
  test('The add utility', () => {
    const result = add(1, 2) // ?
    expect(result).toBe(3)
  })

  test('Calling it as two functions will throw', () => {
    expect(() => add(1)(2)).toThrow()
  })

  test('We can make it auto-curried with ramda', () => {
    const addC = curry(add)
    const inc = addC(1)
    expect(inc).toBeInstanceOf(Function)
    const result = inc(2)
    expect(result).toBe(3)
  })

  test('We can also call it with all arguments', () => {
    const addC = curry(add)
    const result = addC(1, 2)
    expect(result).toBe(3)
  })
})

describe('R.curryN', () => {
  const sum = (...args) => args.reduce((n, sum) => sum + n, 0)
  test('Sum function with 2 args', () => {
    const result = sum(1, 2)
    expect(result).toBe(3)
  })

  test('Sum function with 3 args', () => {
    const result = sum(1, 2, 3)
    expect(result).toBe(6)
  })

  test('Sum function with 5 args', () => {
    const result = sum(1, 2, 3, 4, 5)
    expect(result).toBe(15)
  })

  test('curryN to auto-curry a variadic function', () => {
    const sum4 = curryN(4, sum)
    const result = sum4(1, 2, 3, 4)
    expect(result).toBe(10)

    const sumPlus3 = sum4(3)
    expect(sumPlus3).toBeInstanceOf(Function)
    const result2 = sumPlus3(2, 3, 4)
    expect(result2).toBe(12)
  })

  test('curryN also works when target function has set arity', () => {
    const addC = curryN(2, add)
    const inc = addC(1)
    const result = inc(2)
    expect(result).toBe(3)
  })
})
