export const getQueryNumbers = (arr) => {
    return arr.map(link => {
        return link.replace(/[^+\d]/g, '')
    })
};

export const getQueryNumber = (url) => {
    return url.replace(/[^+\d]/g, '')
};

