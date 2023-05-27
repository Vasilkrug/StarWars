
export const getQueryNumbers = (arr) => {
    return arr.map(link => {
        return link.replace(/[^+\d]/g, '')
    })
}
