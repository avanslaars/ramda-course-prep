import { reverse, omit } from 'ramda'

test('reverse mutates an array', () => {
  const numbers = [1, 2, 3]
  numbers.reverse()
  expect(numbers).toEqual([3, 2, 1])
})

test('The reverse function in ramda returns a new array', () => {
  const numbers = [1, 2, 3]
  const reversed = reverse(numbers)
  expect(numbers).toEqual([1, 2, 3])
  expect(numbers === reversed).toBeFalsy()
})

test('Ramda functions all treat data as immutable', () => {
  const person = { id: 1, name: 'Joe', age: 28 }
  const result = omit(['age'], person)
  // person is unchanged
  expect(person).toEqual({ id: 1, name: 'Joe', age: 28 })
  // result contains a new object that reflects the changes
  expect(result).toEqual({ id: 1, name: 'Joe' })

  // result and person are not the same obj reference
  expect(result === person).toBeFalsy()
})
