import React,{Component} from 'react'
import stylesheet from './stylesheet'
import {Transition} from 'react-transition-group'
import {css} from 'emotion'

class PanelBehavior extends Component{
    constructor(props){
        super(props);
    }
    state = {
        maxHeight: '',
        in: this.props.isVisible,
        open: this.props.isVisible
    };
    componentDidUpdate(prevProps) {
      if (!prevProps.isVisible && this.props.isVisible) {
        this.show();
        requestAnimationFrame(()=>this.updateMaxHeight())
      } else if (prevProps.isVisible && !this.props.isVisible) {
        this.beginExit();
      }
    }
    beginExit() {
        this.setState({ in: false });
    }
    show() {
        this.setState({ open: true })
        window.requestAnimationFrame(() => {
            this.setState({ in: true });
        })
    }
    componentDidMount(){
        window.addEventListener('resize',this.handleResize);
        this.updateMaxHeight()
    }
    componentwillunmount(){
        window.removeEventListener('resize',this.handleResize)
    }
    containerRef= ref => {
        this.refContainer = ref
    }
    updateMaxHeight= () => {
        const {top} = this.refContainer.getBoundingClientRect();
        this.setState({
            maxHeight: `${window.innerHeight-100-top}px`
        })
    }
    handleResize=()=>{
        this.updateMaxHeight()
    }
    handleExit = () => {
        this.setState({ open: false });
      };
    getTransitionStatus(transitionState) {
        return !this.state.open ? 'hidden' : transitionState;
    }
    render(){
        const {containerRef,handleExit} = this;
        const {maxHeight} = this.state;
        return  <Transition in={this.state.in}
                            timeout={1000} 
                            onExited={handleExit}>
                    {
                        transitionState => {
                            return this.props.children({maxHeight,containerRef,transitionState: this.getTransitionStatus(transitionState)})
                        }
                    }
                </Transition>
    }
}

function PanelPresenter({children,title,maxHeight,containerRef,transitionState,handleClear}){
    const styles = stylesheet({transitionState})
    return <div className={css(styles.panelContainer)}>
            <div className={css(styles.caret)}>
                <svg height="24" viewBox="0 0 24 24" width="24">
                    <polygon className={css(styles.caretBorder)} points="0,12 12,0 24,12"></polygon>
                    <polygon className={css(styles.caretBody)} points="2.5,12 12,2.5 21.5,12"></polygon>
                </svg>
            </div>
            <div className={css(styles.panel)} ref={containerRef}>
            <header className={css(styles.header)}>
                {title}
                <div className={css(styles.clear)} onClick={handleClear}>Clear all</div>
            </header>
            <section role='list' style={{maxHeight}}>
                {children}
            </section>
            </div>
        </div>
}
PanelPresenter.defaultProps={
    title: 'Notification'
}

function Panel({title,isVisible,children,handleClear}){
    return <PanelBehavior isVisible={isVisible}>
                {
                    ({maxHeight,containerRef,transitionState})=>(
                        <PanelPresenter 
                            transitionState={transitionState} 
                            title={title}
                            maxHeight={maxHeight} 
                            containerRef={containerRef}
                            handleClear={handleClear}>
                            {children}
                        </PanelPresenter>)
                }
    </PanelBehavior>
}
export default Panel;
