import { compose, pipe } from 'ramda'

export const add = (a, b) => a + b
export const inc = n => n + 1
export const dbl = n => n * 2

// version 0 - start here
// export const addIncDbl = compose(
//   dbl,
//   inc,
//   add
// )

// version 1 - replace compose with pipe
// breaks test - results in NaN because
// add never gets its second argument
// export const addIncDbl = pipe(
//   dbl,
//   inc,
//   add
// )

// version 2 - fix the order
export const addIncDbl = pipe(
  add,
  inc,
  dbl
)
