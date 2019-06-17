import {combineReducers} from 'redux'

const postsBySubreddit = (state={},action)=>{
    switch(action.type){
        case 'RECEIVE_POST':
            return Object.assign({},state,{[action.subreddit]: {items: action.posts, 
                                                                didInvalidate: false,
                                                                isFetching: false,
                                                                lastUpdated: action.receivedAt}})
                
        case 'INVALIDATE_SUBREDDIT':
            return Object.assign({},state,{[action.subreddit]: Object.assign({},state[action.subreddit],{didInvalidate: true, isFetching: true})})
        case 'REQUEST_POST':
            return Object.assign({},state,{[action.subreddit]: Object.assign({},state[action.subreddit],{didInvalidate: false, isFetching: true})})
        default:
            return state    
    }
}
const selectedSubreddit = (state='reactjs',action)=>{
    switch(action.type){
        case 'SELECT_SUBREDDIT':
            return action.subreddit
        default:
            return state    
    }
}
export default combineReducers({postsBySubreddit,selectedSubreddit})