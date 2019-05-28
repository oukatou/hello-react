import React,{Component} from 'react'
import items from '../moviesData'
import PropTypes from 'prop-types'

class Items extends Component{
    constructor(props){
        super(props)
    }
    
    static propTypes={
        filter:PropTypes.string.isRequired
    }

    render(){
        return (
            <div style={{position:'absolute',top:'100px',left:'50px'}}>
                {items.map((item,index)=>{
                    const imgStyle={
                        boxShadow: '0 0 4px #695f5f',
                        transition: '0.8s',
                        perspective:'600px',
                        ...item.movieName.indexOf(this.props.filter)>-1 ? 
                                      { ...imgStyle, width:'182px',opacity:1,transform:'scale3d(1,1,1)',margin: '8px'} : 
                                      { ...imgStyle, width:0, opacity:0, transform:'scale3d(0,0,0)', } 
                    }
                    return <img style={ imgStyle } src={item.pic_url} key={index}/>
                })}
            </div>
        )
    }
}

export default Items