import React, {Component}from 'react'
import {css} from 'emotion'
import stylesheet from './Tile.stylesheet'

class Tile extends Component{
    constructor(props){
        super(props);
        this.showImage=this.showImage.bind(this);
        this.hideImage=this.hideImage.bind(this)
        this.state={
            showPopup: false
        }
    }
    showImage(){
        this.setState({
            showPopup: true
        })
    }
    hideImage(){
        this.setState({
            showPopup: false
        })
    }
    render(){
        let ss=stylesheet()
        let {tile} = this.props
        return (
            <div>
                <div className={css(ss.img)} >
                    <div id="hover" className={css(ss.hover)} onClick={this.showImage}></div>
                    <img src={tile.tileUrl} style={{verticalAlign: 'middle'}}></img>
                </div>
                <span className={css(ss.name)}>{tile.tileName}</span>
                <div className={css(ss.popup)} onClick={this.hideImage} style={this.state.showPopup ? {display:'flex'} : {display: 'none'}}>
                    <img width='400px' src={tile.tileUrl} style={{verticalAlign: 'middle'}}></img>
                </div>
            </div>
        ) 
    }
}

export default Tile