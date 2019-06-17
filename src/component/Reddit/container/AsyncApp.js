import React,{Component} from 'react'
import fetchPostsIfNeeded from '../actions'
import Posts from '../component/Posts'
import {connect} from 'react-redux'
import Button from '../../Button/Button'
import './App.scss'

class Async extends Component{
    constructor(props){
        super(props)
        this.handleChange=this.handleChange.bind(this)
        this.handleRefreshClick=this.handleRefreshClick.bind(this)
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        if (nextProps.selectedSubreddit !== this.props.selectedSubreddit){
            const {dispatch,selectedSubreddit} = nextProps
            dispatch(fetchPostsIfNeeded(selectedSubreddit))
        }
    }

    componentDidMount(){
        const {dispatch,selectedSubreddit} = this.props
        dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }
    
    handleChange(e){
        const {dispatch} = this.props
        dispatch({type:'SELECT_SUBREDDIT',subreddit: e.target.value})
    }

    handleRefreshClick(){
        const {selectedSubreddit, dispatch} = this.props
        dispatch({type:'INVALIDATE_SUBREDDIT', subreddit: selectedSubreddit})
        dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }

    render(){
        const {selectedSubreddit, posts, lastUpdated, isFetching} = this.props
        return (
            <div>
                <select className='select' value={selectedSubreddit} onChange={this.handleChange}>
                    <option value='reactjs'>react</option>
                    <option value='vuejs'>vue</option>
                    <option value='frontend'>frontend</option>
                </select>
                {!isFetching && <Button onClick={this.handleRefreshClick} title='refresh' style={{float: 'right', width: '70px'}}></Button>}
                <p>{lastUpdated && <span>Last updated at  {new Date(lastUpdated).toLocaleTimeString()}</span>}</p>
                {isFetching && <h3>Loading</h3>}
                {!isFetching && posts && posts.length==0 && <h3>Empty</h3>}
                {!isFetching && posts && posts.length>0 && <Posts posts={posts}/>}
            </div>
            )
    }
}

function mapStateToProps(state){
    const {postsBySubreddit, selectedSubreddit} = state;
    const {lastUpdated, items:posts, isFetching} = postsBySubreddit[selectedSubreddit] || {items:[]}
    return {posts, lastUpdated, selectedSubreddit, isFetching}
}

export default connect(mapStateToProps)(Async)