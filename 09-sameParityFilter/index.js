export const sameParityFilter = (arr = []) => {
    let sameParity = []
    if (arr[0] % 2 == 0) {
        sameParity = arr.filter(item => item % 2 == 0)
    } else {
        sameParity = arr.filter(item => item % 2 == !0)
    }
    return sameParity
}
