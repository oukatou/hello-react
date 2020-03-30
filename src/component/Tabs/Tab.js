import React from 'react'
import stylesheet from './stylesheet'
import {css} from 'emotion'
import ControlBehavior from '../Behavior/ControlBehavior'
export default function Tab(){
    return null
}
Tab.defaultProps={
    render({ key, label, active, handleClick }) {
        return <ControlBehavior key={key}>
          {
            ({hasFocus,onFocus,onBlur})=>{
              const styles=stylesheet(active, label, hasFocus)
              return (
                <li
                  tabIndex='0'
                  key={key}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  className={css(styles.li)}
                  onClick={handleClick}>
                  <div className={css(styles.tabLabel)} role="button">
                    <p>{label}</p>
                  </div>
                </li>
              )
            }
          }
        </ControlBehavior>
      }
}