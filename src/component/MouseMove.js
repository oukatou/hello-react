import {Component} from 'react'
class MouseMove extends Component{
    constructor(props){
      super(props)
      this.state={
        mouse:{x:0,y:0}
      }
      this.handleMove=this.handleMove.bind(this)
    }
    handleMove(e){
      this.setState({
        mouse:{
          x:e.clientX,
          y:e.clientY
        }
      })
    }
    render(){
      return this.props.children(this.state.mouse,this.handleMove)
      
    }
  }
  export default MouseMove