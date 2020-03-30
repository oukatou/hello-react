import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {css,cx} from 'emotion' 
import ModalPresenter from './ModalPresenter'
import customClassNames from './createCustomClassNames'
import stylesheet from './Modal.stylesheet'

class ModalBehavior extends Component{
    onClose=this.props.onClose
    contentRef
    refContent=contentRef => this.contentRef = contentRef
    componentDidMount(){
        this.contentRef.focus()
    }
    componentDidUpdate(){
        this.contentRef.focus()
    }
    handleOverlayClick=(e)=>{
        if(this.props.open && e.target == e.currentTarget){
            this.onClose()
        }
    }
    handleKeyup=(e)=>{
        if(this.props.open && e.keyCode==27){
            e.stopPropagation()
            this.onClose()
        }
    }
    render(){
        const {children} = this.props;
        const {refContent, handleOverlayClick, handleKeyup} = this;
        return children(refContent, handleOverlayClick, handleKeyup)
    }
}

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
                <ModalBehavior open={open} onClose={onClose}>
                    {(refContent, handleOverlayClick, handleKeyup)=>{
                        return (
                            <ModalPresenter 
                                className={className} 
                                title={title} 
                                onClose={onClose} 
                                open={open}
                                headerChildren={headerChildren}
                                backClosable={backClosable}
                                keyboard={keyboard}
                                refContent={refContent}
                                handleOverlayClick={handleOverlayClick}
                                handleKeyup={handleKeyup}   
                            >
                                {children}
                            </ModalPresenter>
                            )
                        }
                    }
                </ModalBehavior>
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