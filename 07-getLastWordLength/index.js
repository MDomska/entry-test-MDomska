export const getLastWordLength = str => {
    let arr = str.split(' ')
    let WordLength = arr[arr.length - 1].length
    return WordLength
};
