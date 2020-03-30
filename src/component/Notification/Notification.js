import React, {Component} from 'react'
import NotificationPresenter from './NotificationPresenter'
import ControlBehavior from '../Behavior/ControlBehavior'
import {Transition} from 'react-transition-group'

class NotificationBehavior extends Component{
    state={
        isVisible: true
    }
    containerRef
    handleClose=()=>{
        this.setState({ height: `${this.containerRef.clientHeight}px` });
        window.requestAnimationFrame(() => {
            this.setState({
                height: '0px',
                isVisible: false
            });
        });

    }
    handleExit=()=>{
        const {onDismiss} = this.props;
        onDismiss && onDismiss();
    }
    refContainer=(ref)=>{
        this.containerRef = ref
    }
    render(){
        const {children} = this.props;
        const {handleClose,refContainer,handleExit} = this;
        const {height, isVisible} = this.state;
        return <Transition timeout={1000} in={isVisible} onExited={handleExit}>
            {transitionStatus =>
                 children({handleClose,height,transitionStatus,refContainer})
            }
        </Transition>
    }
}

const Notification = (props) => {
    const {children, onDismiss} = props;
    return (
        <NotificationBehavior onDismiss={onDismiss}>
            {({handleClose,height,transitionStatus,refContainer}) => {
                return (
                    <ControlBehavior>
                        {({hasHover,onMouseEnter,onMouseLeave})=>{
                            return (
                                <NotificationPresenter
                                    hasHover={hasHover}
                                    onMouseEnter={onMouseEnter}
                                    onMouseLeave={onMouseLeave}
                                    handleClose={handleClose}
                                    height={height}
                                    transitionStatus={transitionStatus}
                                    refContainer={refContainer}
                                >
                                    {children}
                                </NotificationPresenter>)
                            }
                        }
                    </ControlBehavior>)}}
        </NotificationBehavior>
    )
}

export default Notification