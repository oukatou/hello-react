import React from 'react'
import stylesheet from './stylesheet'
import {css} from 'emotion'

function NotificationPresenter(props){
    const {children,hasHover,onMouseEnter,onMouseLeave,handleClose,height,transitionStatus,refContainer} = props
    const styles=stylesheet({hasHover,transitionStatus})
    return (
        <div className={css(styles.container)} 
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{height}}
            ref={refContainer}
            role='listitem'>
            <div className={css(styles.notification)}>
                {children}
            </div>
            <span onClick={handleClose} className={css(styles.close)}>×</span>
        </div>
    )
}

export default NotificationPresenter