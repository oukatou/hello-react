import React, { Component } from 'react';
import Todoitem from './Todoitem'

class Todolist extends Component {
  constructor(props){
      super(props)
      this.state={
        list: [],
        inputValue: ''
    }
  }  
  add(){
      this.setState({
          list: [...this.state.list, this.state.inputValue],
          inputValue: ''
      })
  }
  handleInputChange(e){
    this.setState({
        inputValue: e.target.value
    })
  }
  handleDelete(index){
      const list = [...this.state.list];
      list.splice(index,1)
      this.setState({
        list
    })
  }
  getTodoItems(){
      return  ( 
        this.state.list.map((item, index)=>{
          //return <li key={index}>{item} <span onClick={this.handleDelete.bind(this,index)}>×</span> </li>
          return <Todoitem 
                    key={index} 
                    handleDelete={this.handleDelete.bind(this)} 
                    content={item} index={index}
                  />
        })
        )
  }
  render() {
    return (
      <div className="container">
          <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
          <button onClick={this.add.bind(this)}>add</button>
          <ul>
             {this.getTodoItems()}
          </ul>
      </div>
    );
  }
}

export default Todolist;
