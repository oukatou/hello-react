import React,{Component} from 'react'
import stylesheet from './Modal.stylesheet'
import {css,cx} from 'emotion'
import customClassNames from './createCustomClassNames'

class ModalPresenter extends Component{
    onClose=this.props.onClose
    handleOverlayClick=(e)=>{
        if(this.props.open && e.target == e.currentTarget){
            this.onClose()
        }
    }
    contentRef
    refContent=contentRef => this.contentRef=contentRef
    componentDidMount(){
        this.contentRef.focus()
    }
    componentDidUpdate(){
        this.contentRef.focus()
    }
    handleKeyup=(e)=>{
        if(this.props.open && e.keyCode==27){
            e.stopPropagation()
            this.onClose()
        }
    }
    render(){
        const { title,
                children,
                className,
                headerChildren,
                onClose,
                open,
                backClosable,
                keyboard
              } = this.props;
        const overlayClassName = className && customClassNames(className,'overlay');
        const contentClassName = className && customClassNames(className,'content');
        const headerClassName = className && customClassNames(className,'header');
        const closeClassName = className && customClassNames(className,'close');
        const bodyClassName = className && customClassNames(className,'body');
        const styles = stylesheet({open})
        return <div 
                 tabIndex={-1}
                 className={cx(css(styles.overlay), overlayClassName)}
                 onClick={backClosable ? this.handleOverlayClick : null}
                 onKeyUp={keyboard ? this.handleKeyup : null}
               >
                    <article 
                      tabIndex={-1}
                      ref={this.refContent}
                      className={cx(css(styles.content), contentClassName)}>
                        <header 
                          className={cx(css(styles.header), headerClassName)}>
                            { headerChildren ? headerChildren : 
                                <span>{title}</span>
                            }
                            <span 
                              className={cx(css(styles.close), closeClassName)} 
                              onClick={onClose}>×</span>
                        </header>
                        <div 
                          className={cx(css(styles.body), bodyClassName)}>
                            {children}
                        </div>
                    </article>
                </div>
    }
}

export default ModalPresenter