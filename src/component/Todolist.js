import React, { Component } from 'react';
import Todoitem from './Todoitem'
import Button from './Button/Button'
import Input from './Input/Input'

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
        this.state.list.map((content, index)=>{
          let props={
            handleDelete: this.handleDelete.bind(this),
            content,
            index
          }
          return <Todoitem key={index} {...props}/>
        })
        )
  }
  render() {
    return (
      <div className="container">
          <Input onChange={this.handleInputChange.bind(this)} value={this.state.inputValue} />
          <Button onClick={this.add.bind(this)} title='Add'/>
          <ul className='ul'>
             {this.getTodoItems()}
          </ul>
      </div>
    );
  }
}

export default Todolist;
