import React, {Component} from 'react'
import IndicatorPresenter from './IndicatorPresenter'
import Panel from './Panel'

class NotificationFlyoutBehavior extends Component{
    state={
        open: false
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
    render(){
        const {children} = this.props;
        const {open} = this.state;
        const {handleClick,wrapperRef} = this;
        return children({open,handleClick,wrapperRef})
    }
}

export default function NotificationFlyout({children}){
    return <NotificationFlyoutBehavior>
            {
                ({open,handleClick,wrapperRef}) => (
                    <div ref={wrapperRef}>
                        <IndicatorPresenter onClick={handleClick}/>
                        <Panel isVisible={open}>
                            {children}
                        </Panel>
                    </div>)
            }
    </NotificationFlyoutBehavior>
}