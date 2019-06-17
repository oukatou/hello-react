import React,{Component} from 'react'
import {css} from 'emotion'
import stylesheet from './Input.stylesheet'
import ControlBehavior from '../Behavior/ControlBehavior'

export default class Input extends Component{
    constructor(props){
        super(props)
        this.inputRef = React.createRef();
    }
    static defaultProps={
        placeholder: 'Please input'
    }
    render(){
        let {
            placeholder,
            onChange,
            value,
            ...otherProps
        } = this.props
        return (
            <ControlBehavior>
                {
                    ({hasHover,hasFocus, onFocus, onBlur, onMouseEnter, onMouseLeave})=>
                        <input  onFocus={onFocus}
                                onBlur={onBlur}
                                onMouseLeave={onMouseLeave}
                                onMouseEnter={onMouseEnter}
                                onChange={onChange}
                                className={css(stylesheet({hasFocus,hasHover}))}
                                type='text'
                                value={value}
                                placeholder={placeholder}
                                ref={this.inputRef}
                                {...otherProps}
                                >
                        </input>
                }
            </ControlBehavior>
        )
    }
}
