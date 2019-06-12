import React, { Component } from 'react';
import Todoitem from './Todoitem'

class Todolist extends Component {
  constructor(props){
      super(props)
  }
  getTodoItems(){
      return  ( 
        this.props.todos.map((content, index)=>{
          let props={
            handleDelete:this.props.delete,
            ...content,
            index
          }
          return <Todoitem key={index} {...props}/>
        })
        )
  }
  render() {
    return (
          <ul className='ul'>
             {this.getTodoItems()}
          </ul>
    );
  }
}

export default Todolist;
