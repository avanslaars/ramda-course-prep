import _ from 'lodash'
import { map } from 'ramda'

test('lodash map transforms items in an array', () => {
  const numbers = [1, 2, 3]
  const result = _.map(numbers, n => n * 2)
  expect(result).toEqual([2, 4, 6])
})

test('ramda map transforms items in an array', () => {
  const numbers = [1, 2, 3]
  const result = map(n => n * 2, numbers)
  expect(result).toEqual([2, 4, 6])
})

test('ramda map auto-curries and takes data last', () => {
  const numbers = [1, 2, 3]
  const dblNumbers = map(n => n * 2) // ?
  const result = dblNumbers(numbers)
  expect(result).toEqual([2, 4, 6])

  const result2 = dblNumbers([3, 4, 5])
  expect(result2).toEqual([6, 8, 10])
})

test('We can do the same with lodash', () => {
  const numbers = [1, 2, 3]
  // 1st, create curried map
  const mapC = _.curry(_.map, 2)
  // 2nd, use _ placeholder to account for argument order
  const dblNumbers = mapC(_, n => n * 2)
  const result = dblNumbers(numbers)
  expect(result).toEqual([2, 4, 6])
})
