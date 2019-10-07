import React from 'react'
import PropTypes from 'prop-types'
import {css,cx} from 'emotion' 
import ModalPresenter from './ModalPresenter'
import customClassNames from './createCustomClassNames'
import stylesheet from './Modal.stylesheet'

function Modal(props){
    const {title,
           children,
           onClose,
           open,
           className,
           headerChildren,
           mask,
           backClosable,
           keyboard
          } = props

    const maskClassName = className && customClassNames(className,'mask');
    const styles = stylesheet({open})

    return <div className={className}>
                <ModalPresenter 
                    className={className} 
                    title={title} 
                    onClose={onClose} 
                    open={open}
                    headerChildren={headerChildren}
                    backClosable={backClosable}
                    keyboard={keyboard}
                >
                    {children}
                </ModalPresenter>
                {mask && <div className={cx(css(styles.mask),maskClassName)}></div>}
           </div>
}

Modal.propTypes = {
    children: PropTypes.node,
    mask: PropTypes.bool,
    keyboard: PropTypes.bool,
    open: PropTypes.bool,
    backClosable: PropTypes.bool,
    onClose: PropTypes.func,
    title: PropTypes.string,
    className: PropTypes.string,
    headerChildren: PropTypes.node
}
Modal.defaultProps = {
    mask: true,
    keyboard: true,
    open: false,
    backClosable: true
}
export default Modal