import React, {Suspense} from 'react'
import Input from '../Input/Input'
import {connect} from 'react-redux'

const Addtodo = ({dispatch})=>{
    let inputRef
    let nextTodoId = 0
    const OtherComponent = React.lazy(() => import('../Button/Button'));
    const addTodo = () => {
        if(!inputRef.inputRef.current.value) return;
        dispatch({type:'ADD_TODO',id:nextTodoId++, content:inputRef.inputRef.current.value});
        inputRef.inputRef.current.value=''
    }
    return (
        <div>
            <Input ref={node => inputRef = node} />
            <Suspense fallback={<div>Loading...</div>}>
              <OtherComponent onClick={addTodo} title='Add'/>
            </Suspense>
        </div>
    )
}
export default connect()(Addtodo)

