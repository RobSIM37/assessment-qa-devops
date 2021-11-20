const {shuffleArray} = require('./utils')
const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
describe('shuffleArray should', () => {
    test('return the same length array as the one provided', () => {

        expect(shuffleArray(testArr).length).toBe(testArr.length);

    })

    test('returned array contains all the elements of the original array', () => {

        expect(shuffleArray(testArr).reduce((a, c) => !testArr.includes(c)?false: a, true)).toBe(true);

    })
})