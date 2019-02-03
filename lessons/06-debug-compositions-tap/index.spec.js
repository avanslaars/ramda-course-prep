import { compose, inc, add, multiply, tap } from 'ramda'

const addIncDbl = compose(
  multiply(2),
  tap(x => console.log('value after inc', x)),
  inc,
  tap(x => console.log('value after add', x)),
  add
)

test('addIncDbl returns the correct result', () => {
  const result = addIncDbl(1, 2) // ?
  expect(result).toBe(8)
})
