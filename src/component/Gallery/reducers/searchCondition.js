export default function searchCondition(state = {}, action) {
    switch (action.type) {
        case 'SET_QUERY': {
            return { ...state, query: action.query }
        }
        case 'SET_SORT': {
            return { ...state, sort: action.sort }
        }
        default: return state
    }
}