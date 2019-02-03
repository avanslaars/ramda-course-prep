import { compose, fromPairs, map, split, tail } from 'ramda'

const parseQs = compose(
  fromPairs,
  map(split('=')),
  split('&'),
  tail
)

test('parseQs results in the expected object', () => {
  const queryString = '?page=2&pageSize=10&total=203'
  const result = parseQs(queryString)
  expect(result).toEqual({ page: '2', pageSize: '10', total: '203' })
})

test.todo('Add a validity test to bail early for malformed QS')
