import React, { Component }  from 'react';

class Todoitem extends Component{
    delete(){
        const { handleDelete, index } = this.props;
        handleDelete(index)
    }
    render(){
        const {content} = this.props
        return (
            <li>{content}<span onClick={this.delete.bind(this)}>   ×</span></li>
        )
    }
}

export default Todoitem;