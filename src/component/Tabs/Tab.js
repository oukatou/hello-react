import React from 'react'
import stylesheet from './stylesheet'
import {css} from 'emotion'
export default function Tab(){
    return null
}
Tab.defaultProps={
    render({ key, label, active, handleClick }) {
        const styles=stylesheet(active, label)
        return (
          <li
            key={key}
            className={css(styles.li)}
            onClick={handleClick}>
            <div className={css(styles.tabLabel)} role="button">
              <p>{label}</p>
            </div>
          </li>
        );
      }
}