import React, {forwardRef} from 'react'
import {css} from 'emotion'
import stylesheet from './Input.stylesheet'
import ControlBehavior from '../Behavior/ControlBehavior'

const Input = (props, ref)=>{
        let {
            placeholder,
            onChange,
            value,
            ...otherProps
        } = props;
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
                                ref={ref}
                                {...otherProps}
                                >
                        </input>
                }
            </ControlBehavior>
        )
}

export default forwardRef(Input)