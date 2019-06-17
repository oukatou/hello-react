const receivePosts=(subreddit,json)=>{
    return {
        type: 'RECEIVE_POST',
        subreddit,
        posts: json.data.children.map(child=>child.data),
        receivedAt: Date()
    }
}

const fetchPosts=subreddit=>dispatch=>{
            dispatch({type: 'REQUEST_POST',subreddit})
            fetch(`/r/${subreddit}.json`)     
            .then(response=>response.json(),error => console.log('An error occurred.', error))
            .then(json=>dispatch(receivePosts(subreddit,json)))
                                        }

const fetchPostsIfNeeded=subreddit=>(dispatch,getState)=>{
    const posts = getState().postsBySubreddit[subreddit]
    if(!posts || posts.didInvalidate){
        return dispatch(fetchPosts(subreddit))
    }else{
        return Promise.resolve()
    }
}                                     

export default fetchPostsIfNeeded