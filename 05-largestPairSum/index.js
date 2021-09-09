/**
 * largestPairSum - Returns sum of highest and lowest values in array:
 * @param {array} numbers - the array of numbers
 * @returns {number} - returns the new number
 */
export const largestPairSum = (numbers) => {
    numbers.sort()
    let sum = arr[arr.length - 2] + arr[arr.length - 1]
    return sum
}
