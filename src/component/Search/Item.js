import React,{Component} from 'react'
import {Transition} from 'react-transition-group'
import stylesheet from './stylesheet'
import {css} from 'emotion'

class Item extends Component{
    state={in:false}
    handleMouseLeave=()=>{
        this.setState({in:false})
    }
    handleMouseEnter=()=>{
        this.setState({in:true})
    }
    render(){
        const transitionStyles = {
            entering: { opacity: 1 },
            entered:  { opacity: 1 },
            exiting:  { opacity: 0 },
            exited:  { opacity: 0 },
          };
        const {handleMouseEnter,handleMouseLeave} = this;
        const {movieName,filter,pic_url} = this.props;
        const exist = movieName.indexOf(filter)>-1 ? true : false;
        const styles = stylesheet(exist)
        return (
            <li
                className={css(styles.item)}
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}
            >
                <img className={css(styles.img)} src={pic_url} />
                <Transition timeout={500} in={this.state.in}>
                    {
                        state => <div className={css(styles.mask)} style={transitionStyles[state]}></div> 
                    }
                </Transition>
            </li>
                        
                
        )
    }
}

export default Item