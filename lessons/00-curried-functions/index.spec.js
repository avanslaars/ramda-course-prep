import { add } from 'ramda'

describe('Manually currying a function', () => {
  test('A standard binary function', () => {
    const mult = (a, b) => a * b
    const result = mult(2, 3)
    expect(result).toBe(6)
  })

  test('A curried function', () => {
    const mult = a => b => a * b
    const timesTwo = mult(2)
    const result = timesTwo(3)
    expect(result).toBe(6)
  })
})

describe('Ramda functions are auto curried by default', () => {
  test('The add utility', () => {
    /**
     * Normal behavior for an add utility
     */
    const result = add(1, 2) // ?
    expect(result).toBe(3)
  })

  test('Separating the arguments', () => {
    /**
     * Separating it out into 2 function calls
     * add(1) results in a function
     * the additional `(2)` invokes the returned function
     */
    const result = add(1)(2)
    expect(result).toBe(3)
  })

  test('Creating new functions', () => {
    /**
     * Because functions in JS are 1st class we can
     * assign the results of the initial function call
     * to a new identifier and then call that function
     */
    const inc = add(1)
    expect(inc).toBeInstanceOf(Function)
    const result = inc(2)
    expect(result).toBe(3)
  })
})
