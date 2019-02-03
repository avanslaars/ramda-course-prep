import { compose, prop, toUpper, defaultTo, propOr } from 'ramda'

test('prop gets a property value from an object', () => {
  const person = {
    id: 1,
    name: 'Sally',
    age: 28
  }
  const result = prop('name', person)
  expect(result).toBe('Sally')
})

test('prop results in undefined for a missing prop', () => {
  const person = {
    id: 1,
    // name: 'Sally',
    age: 28
  }
  const result = prop('name', person) // ?
  expect(result).toBeUndefined()
})

test('undefined is an issue in a composition', () => {
  const person = {
    id: 1,
    name: 'Sally',
    age: 28
  }
  const getUpperName = compose(
    toUpper,
    prop('name')
  )
  const result = getUpperName(person)
  expect(result).toBe('SALLY')
  // expect(() => getUpperName(person)).toThrow()
})

test('We can handle undefined by composing with defaultTo', () => {
  const person = {
    id: 1,
    name: 'Sally',
    age: 28
  }
  // Here's how defaultTo works...
  const defaultResult = defaultTo('default', undefined)
  expect(defaultResult).toBe('default')

  // When composed
  const getUpperName = compose(
    toUpper,
    defaultTo('unnamed'),
    prop('name')
  )
  const result = getUpperName(person) // ?
  expect(result).toBe('SALLY')

  const result2 = getUpperName({}) // ?
  expect(result2).toBe('UNNAMED')
})

test('Ramda has propOr built in', () => {
  const person = {
    id: 1,
    name: 'Sally',
    age: 28
  }

  // propOr takes the default, then prop name, then the object
  const getUpperName = compose(
    toUpper,
    propOr('unnamed', 'name')
  )

  const result = getUpperName(person) // ?
  expect(result).toBe('SALLY')

  const result2 = getUpperName({}) // ?
  expect(result2).toBe('UNNAMED')
})
