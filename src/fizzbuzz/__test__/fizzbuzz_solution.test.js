import fizzbuzz from '../fizzbuzz_solution'
import { isTSAnyKeyword } from '@babel/types'

describe('fizzbuzz', () => {
    it('returns empty array when passed empty array', () => {
        const input = []
        const expected = []
        const result = fizzbuzz(input)

        expect(result).toEqual(expected)
    })

    it('returns the input when it is not fizzbuzz-able', () => {
        const input = [1,2,4]
        const expected = [1,2,4]
        const result = fizzbuzz(input)

        expect(result).toEqual(expected)
    })

    it('replaces numbers divisible by 3 with "fizz"', () => {
        const input = [1,3,4]
        const expected = [1,'fizz', 4]
        const result = fizzbuzz(input)

        expect(result).toEqual(expected)
    })

    it('replaces numbers divisible by 5 with "buzz"', () => {
        const input = [1,5,4]
        const expected = [1,'buzz', 4]
        const result = fizzbuzz(input)

        expect(result).toEqual(expected)
    })

    it('replaces numbers divisible by 15 with "fizzbuzz"', () => {
        const input = [1,45,4]
        const expected = [1,'fizzbuzz', 4]
        const result = fizzbuzz(input)

        expect(result).toEqual(expected)
    })
})