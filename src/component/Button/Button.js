import React,{Component} from 'react'
import {css} from 'emotion'
import stylesheet from './Button.stylesheet'
import ControlBehavior from '../Behavior/ControlBehavior'

export default class Button extends Component{
    render(){
        let {
            title,
            onClick
        } = this.props
        return (
            <ControlBehavior>
                {
                    ({hasHover,isPressed, onMouseDown, onMouseUp, onMouseEnter, onMouseLeave})=>
                        <button onClick={onClick} 
                                onMouseDown={onMouseDown}
                                onMouseLeave={onMouseLeave}
                                onMouseUp={onMouseUp}
                                onMouseEnter={onMouseEnter}
                                className={css(stylesheet({isPressed,hasHover}))}>
                            <span>{title}</span>
                        </button>
                }
            </ControlBehavior>
        )
    }
}
