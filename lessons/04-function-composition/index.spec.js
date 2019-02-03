import { compose } from 'ramda'
import { add, inc, dbl } from './index'

// Version 0
// function addIncDbl(a, b) {
//   const sum = add(a, b)
//   const plusOne = inc(sum)
//   const doubled = dbl(plusOne)
//   return doubled
// }

// version 1.a
// function addIncDbl(a, b) {
//   const doubled = dbl(inc(add(a, b)))
//   return doubled
// }

// version 1.b
// function addIncDbl(a, b) {
//   return dbl(inc(add(a, b)))
// }

// version 2
// const addIncDbl = (a, b) => dbl(inc(add(a, b)))

// version 3 - with compose
// const addIncDbl = (a, b) =>
//   compose(
//     dbl,
//     inc,
//     add
//   )(a, b)

// version 4
const addIncDbl = compose(
  dbl,
  inc,
  add
)

// version "5" - move it into index.js & import it

test('addIncDbl gets the expected result', () => {
  const result = addIncDbl(1, 2) // ?
  expect(result).toBe(8)
})
