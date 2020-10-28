export default function projects(state = {}, action) {
    switch (action.type) {
        case 'GET_PROJECTS': {
            return { ...state, isFetching: true }
        }
        case 'RECEIVE_PROJECTS':
            return { ...state, ...{ isFetching: false, items: action.projects } }
        default: {
            return state
        }
    }

}