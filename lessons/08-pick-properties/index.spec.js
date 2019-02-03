import { pick, pickAll, pickBy, startsWith } from 'ramda'

const person1 = {
  id: 1,
  name: 'Mark',
  age: 30
}

const person2 = {
  id: 2,
  name: 'Susan',
  age: 34,
  company: 'Mega Corp Inc'
}

test('Pick gets a subset of properties from an object', () => {
  const result = pick(['id', 'name'], person1)
  expect(result).toEqual({ id: 1, name: 'Mark' })
})

test('Pick is auto-curried', () => {
  const getNameAndId = pick(['id', 'name'])

  const result = getNameAndId(person1)
  expect(result).toEqual({ id: 1, name: 'Mark' })

  const result2 = getNameAndId(person2)
  expect(result2).toEqual({ id: 2, name: 'Susan' })
})

test('Pick will leave out missing properties', () => {
  const getNameAndId = pick(['id', 'name', 'company'])

  const result = getNameAndId(person1) // ?
  expect(result).toEqual({ id: 1, name: 'Mark' })

  const result2 = getNameAndId(person2) // ?
  expect(result2).toEqual({ id: 2, name: 'Susan', company: 'Mega Corp Inc' })
})

test('pickAll will include missing properties as undefined', () => {
  const getNameAndId = pickAll(['id', 'name', 'company'])

  const result = getNameAndId(person1) // ?
  expect(result).toEqual({ id: 1, name: 'Mark', company: undefined })

  const result2 = getNameAndId(person2) // ?
  expect(result2).toEqual({ id: 2, name: 'Susan', company: 'Mega Corp Inc' })
})

test('pickBy gets a subset of properties based on a predicate', () => {
  const isString = val => typeof val === 'string'
  const result = pickBy(isString, person1) // ?
  expect(result).toEqual({ name: 'Mark' })
})

// TODO: Come up with a more useful example
test('pickBy can also use the key in the predicate', () => {
  const keyStartsWithC = (val, key) => startsWith('c', key)
  const result = pickBy(keyStartsWithC, person2) // ?
  expect(result).toEqual({ company: 'Mega Corp Inc' })
})
