import React,{Component} from 'react'
import {css} from 'emotion'
import stylesheet from './stylesheet'
import ControlBehavior from '../Behavior/ControlBehavior'

export default class Button extends Component{
    render(){
        let {
            title,
            onClick,
            onMouseDown,
            onMouseUp,
            onMouseEnter,
            onMouseLeave,
            disabled,
            width,
            buttonRef,
            ...otherProps
        } = this.props
        
        return (
            <ControlBehavior
                onMouseDown={onMouseDown}
                onMouseLeave={onMouseLeave}
                onMouseUp={onMouseUp}
                onMouseEnter={onMouseEnter}
            >
                {
                    ({  hasHover,
                        isPressed,
                        onMouseDown: handleMouseDown,
                        onMouseEnter: handleMouseEnter,
                        onMouseLeave: handleMouseLeave,
                        onMouseUp: handleMouseUp
                    })=>
                        <button onClick={onClick} 
                                onMouseDown={handleMouseDown}
                                onMouseLeave={handleMouseLeave}
                                onMouseUp={handleMouseUp}
                                onMouseEnter={handleMouseEnter}
                                ref={buttonRef}
                                className={css(stylesheet({width, disabled,isPressed,hasHover}))}
                                {...otherProps}>
                            <span>{title}</span>
                        </button>
                }
            </ControlBehavior>
        )
    }
}
