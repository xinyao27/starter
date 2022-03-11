import { describe, expect, it } from 'vitest'
import { A } from '../src'

describe('should', () => {
  it('exported', () => {
    expect(A).toEqual('a')
  })
})
