import React from 'react'
import stylesheet from './Modal.stylesheet'
import {css,cx} from 'emotion'
import customClassNames from './createCustomClassNames'

function ModalPresenter(props){
    const { title,
            children,
            className,
            headerChildren,
            onClose,
            open,
            backClosable,
            keyboard,
            refContent,
            handleOverlayClick,
            handleKeyup
            } = props;
    const overlayClassName = className && customClassNames(className,'overlay');
    const contentClassName = className && customClassNames(className,'content');
    const headerClassName = className && customClassNames(className,'header');
    const closeClassName = className && customClassNames(className,'close');
    const bodyClassName = className && customClassNames(className,'body');
    const styles = stylesheet({open})
    return <div 
        tabIndex={-1}
        className={cx(css(styles.overlay), overlayClassName)}
        onClick={backClosable ? handleOverlayClick : null}
        onKeyUp={keyboard ? handleKeyup : null}
      >
           <article 
             tabIndex={-1}
             ref={refContent}
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

export default ModalPresenter