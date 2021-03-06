import React, { Component }  from 'react';

class Todoitem extends Component{
    delete(){
        const { handleDelete, index } = this.props;
        handleDelete(index)
    }
    render(){
        const {content,completed} = this.props
        return (
            <li style={{
                textDecoration: completed ? 'line-through' : 'none'
                }}
                onClick = {this.delete.bind(this)} 
              >
              { content }
              <span style={{
                        display: completed ? 'none' : 'inline'
              }}>   ×</span> 
            </li>
        )
    }
}

export default Todoitem;