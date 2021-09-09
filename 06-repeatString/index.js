/**
 * repeatString - Duplicates every char in the string some times according to char index
 * @param {string} str - the string
 * @returns {string} - returns the new string
 */
export const repeatString = (str = '') => {
    let repeatString = ''
    for (let i = 0; i < str.length; i++) {
        let b = ''
        for (let j = i + 1; j > 0; j--) {
            b = b + str[i]
            b[0].toUpperCase()
        }
        repeatString = repeatString + b + '-'
    }
    return repeatString
}
