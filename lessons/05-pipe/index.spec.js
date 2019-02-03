import { addIncDbl } from './index'

test('addIncDbl produces the expected result', () => {
  const result = addIncDbl(1, 2)
  expect(result).toBe(8)
})
