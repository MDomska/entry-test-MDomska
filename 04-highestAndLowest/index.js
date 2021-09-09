/**
 * highestAndLowest - Modify initial string into new one, that start with highest number and and with lowest:
 * @param {string} numbers - the source numbers
 * @returns {string} - returns the new string
 */
export const highestAndLowest = (numbers) => {
    let arr = numbers.split(',')
    arr.sort()
    arr.splice(arr[0], arr[arr.length - 2])
    let str = arr.join(',')
    return str
}
