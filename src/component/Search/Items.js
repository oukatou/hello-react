import React,{Component} from 'react'
import items from '../moviesData'
import PropTypes from 'prop-types'
import Item from './Item'
import stylesheet from './stylesheet'
import {css} from 'emotion'

class Items extends Component{
    constructor(props){
        super(props)
    }
    
    static propTypes={
        filter:PropTypes.string.isRequired
    }
    render(){
        const styles = stylesheet()
        return (
            <div className={css(styles.items)}>
                {items.map((item,index)=>{
                    return(
                        <Item key={index} pic_url={item.pic_url} movieName={item.movieName} filter={this.props.filter}/>
                        )
                })}
            </div>
        )
    }
}

export default Items