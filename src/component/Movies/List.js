import React, {Component} from 'react'
import {css} from 'emotion'
import stylesheet from './List.stylesheet'
import Tile from './Tile'
import PropsTypes from 'prop-types'

class List extends Component{
    constructor(props){
        super(props);
        this.handleLeftArrow=this.handleLeftArrow.bind(this);
        this.handleRightArrow=this.handleRightArrow.bind(this);
        this.state={
            firstIndex:-1
        };
        this.count=this.props.count;
        this.lists=this.props.lists;
        this.listCount=this.lists.length;
    }
    static propsTypes={
        count: PropsTypes.number.isRequired,
        lists: PropsTypes.array.isRequired
    }
    handleLeftArrow(){
        if(this.state.firstIndex<=-1)
            return;
        this.setState({
            firstIndex:this.state.firstIndex-1
        })
    }
    handleRightArrow(){
        if(this.state.firstIndex+this.count+1>=this.listCount)
            return;
        this.setState({
            firstIndex:this.state.firstIndex+1
        })
    }
    render(){
        const ss = stylesheet({backgroundColor:true});
        return(
            <div className={css(ss.wrapper)}>
                <div className={css(ss.div)}>
                    {this.lists.map(((list,index)=>{
                        return (
                            <div key={index} className={css(ss.tile)} style={index > this.state.firstIndex && index < this.state.firstIndex+this.count+1 ? {opacity: 1,width: '202px',height: '299px'} : {width:0,height:0,opacity: 0}}>
                                <Tile tile={list}/>
                            </div>
                            )
                    }))}
                </div>
                <div id="leftArrow" className={css(ss.leftArrow)} onClick={this.handleLeftArrow}></div>
                <div id="rightArrow" className={css(ss.rightArrow)} onClick={this.handleRightArrow}></div>
            </div>
        )
    }
}

export default List