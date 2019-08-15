import React,{Component} from 'react'
import Items from './Items'
import SearchInput from './SearchInput'

class Search extends Component{
    constructor(props){
        super(props)
        this.handleInput=this.handleInput.bind(this)
        this.state={
            keyword:''
        }
    }
    handleInput(keyword){
        this.setState({
            keyword
        })
    }
    render(){
        return (
            <div>
                <SearchInput handleInput={this.handleInput}/>
                <Items filter={this.state.keyword}/>
            </div>
        )
    }
}

export default Search