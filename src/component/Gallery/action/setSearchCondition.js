export function applyKeyWord(query) {
    return { type: 'SET_QUERY', query }
}

export function setSort(sort) {
    return { type: 'SET_SORT', sort }
}
