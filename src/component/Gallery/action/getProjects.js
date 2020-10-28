import { setSort } from '../action/setSearchCondition'
import { applyKeyWord } from '../action/setSearchCondition'

export function requestProjects({ query = '', sort = 'popularity' }) {
    return function (dispatch, getState) {
        let { searchCondition } = getState();
        if (searchCondition.sort == sort && searchCondition.query == query) return;
        dispatch(getProjects())
        searchCondition.sort != sort && dispatch(setSort(sort))
        searchCondition.query != query && dispatch(applyKeyWord(query))
        fetch(`https://gallery.autodesk.com/projects/search?query=${query}&sort=${sort}&page=0&page_size=20&facetQuery=`)
            .then(data => data.json())
            .then(data => {
                data.hits && dispatch(receiveProjects(data.hits))
            })
    }
}

function getProjects() {
    return { type: 'GET_PROJECTS' }
}
function receiveProjects(projects) {
    return { type: 'RECEIVE_PROJECTS', projects }
}
