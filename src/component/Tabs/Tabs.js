import React, {Component, Children} from 'react'
import Tab from './Tab'
import memoize from "lodash.memoize";

/**
 * 
 * @typedef {JSX.Element} Tabb
 * @typedef {Object} children
 * 
 * @typedef {Object} childrenn
 * @property {string} abcd
 * 
 * @returns {Number|Array}
 * @param {Tabb} children haizi
 * @property {number} arg1
 * @type {boolean} type
 */
function createTabs(children){
    return Children.toArray(children).reduce((result,child)=>{
        const {key, type, props={}} = child;
        if(type == Tab) result.push({props,key});
        return result
    },[])
}

class Tabs extends Component {
    constructor(props){
        super(props)
        this.state={
            activeIndex: 0
        }
    }
    componentDidMount(){
        const tabs = createTabs(this.props.children)
        const activeIndex = tabs.findIndex(({props})=>props.active)
        if(this.state.activeIndex === activeIndex || activeIndex<0){return}
        this.setState({activeIndex})
    }
    getTabs(){
        return createTabs(this.props.children)
    }
    renderTab=({key, props}, index)=>{
        const {label,render} = props
        const payload={
            key,
            label,
            active: index == this.state.activeIndex,
            handleClick: this.createTabEventHandlers(index)
        }
        return render(payload)
    }
    renderTabs(){
        return (
            <ul style={{display: 'flex',borderBottom: '1px solid #ccc'}}>
                {this.getTabs().map(this.renderTab)}
            </ul>
        )
    }
    setActiveTab(index){
        const {activeIndex} = this.state
        if (index == activeIndex) return;
        this.setState({activeIndex: index})
    }
    getActiveTab(){
        return this.getTabs()[this.state.activeIndex]
    }
    createTabEventHandlers = memoize(index =>
        () => this.setActiveTab(index)
      );
    renderContent(){
        const activeTab =this.getActiveTab()
        return activeTab ? activeTab.props.children : null
    }
    render(){
        return (
          <div className='tabs'>
              {this.renderTabs()}
              {this.renderContent()}
          </div>
        )
    }
}
export default Tabs;