import React, {Component} from 'react'
import IndicatorPresenter from './IndicatorPresenter'
import Panel from './Panel'
import Notification from './Notification'

function parseNotificaitons(notifications){
    return notifications.map((value,index)=>{
        const {children,content=children} = value.props;
        const {key, ...otherProps} = value;
        return {
            id: index,
            content,
            key: index,
            ...otherProps,
        }
    })
}

class NotificationFlyoutBehavior extends Component{
    state={
        open: false,
        notifications: parseNotificaitons(this.props.notifications),
        dismissedNotifications: []
    }
    handleClick=()=>{
        this.setState({
            open: !this.state.open
        })
    }
    handleBodyClick= event =>{
        const clicked = event.target == this.refWrapper || this.refWrapper.contains(event.target);
        if(clicked || !this.state.open) return;
        this.setState({
            open: false
        })
    }
    componentDidMount(){
        window.document.body.addEventListener('click',this.handleBodyClick)
    }
    componentWillUnmount(){
        window.document.body.removeEventListener('click',this.handleBodyClick)
    }
    wrapperRef=ref=>{
        this.refWrapper = ref
    }
    indicatorRef=ref=>{
        this.refIndicator = ref
    }
    getNotifications=()=>{
        const {notifications,dismissedNotifications} = this.state;
        return notifications.filter(({id})=>!dismissedNotifications.includes(id))
    }
    dismissNotification= id => {
        this.setState({dismissedNotifications: this.state.dismissedNotifications.concat(id)})
    }
    handleClear=()=>{
        const {dismissedNotifications} = this.state;
        const clearNotification = this.getNotifications().reduce((result,{id})=>{
            if(!result.includes(id)){return result.concat(id)}
        },dismissedNotifications)
        this.setState({dismissedNotifications:clearNotification},()=>{
            this.getNotifications().length==0 && this.refIndicator.click()
        })
    }
    render(){
        const {children} = this.props;
        const {open} = this.state;
        const {handleClick,wrapperRef,indicatorRef,dismissNotification,handleClear} = this;
        const notifications = this.getNotifications()
        const unreadCount = notifications.length;
        const showCount = unreadCount>0
        return children({open,handleClick,wrapperRef,unreadCount,showCount,notifications,dismissNotification,handleClear,indicatorRef})
    }
}

export default function NotificationFlyout({children}){
    return <NotificationFlyoutBehavior notifications={children}>
            {
                ({open,handleClick,wrapperRef,unreadCount,showCount,notifications,dismissNotification,handleClear,indicatorRef}) => (
                    <div ref={wrapperRef}>
                        <IndicatorPresenter onClick={handleClick} unreadCount={unreadCount} showCount={showCount} indicatorRef={indicatorRef}/>
                        <Panel isVisible={open} handleClear={handleClear}>
                            {notifications.map((value)=>{
                                const {key,content,id,...otherProps} = value;
                                return  <Notification key={key} {...otherProps} onDismiss={()=>dismissNotification(id)}>
                                            {content}
                                        </Notification>
                            })}
                        </Panel>
                    </div>)
            }
    </NotificationFlyoutBehavior>
}