import React, {Suspense} from 'react'
import Input from '../Input/Input'
import {connect} from 'react-redux'

const Addtodo = ({dispatch})=>{
    let nextTodoId = 0;
    let inputRef = React.createRef();
    const OtherComponent = React.lazy(() => import('../Button/Button'));
    const addTodo = (e) => {
        if(!inputRef.current.value) return;
        if(e.keyCode && e.keyCode!=13) return;
        dispatch({type:'ADD_TODO',id:nextTodoId++, content:inputRef.current.value});
        inputRef.current.value=''
    }
    return (
        <div>
            <Input ref={inputRef} style={{width: '200px'}} onKeyDown={addTodo}/>
            <Suspense fallback={<div>Loading...</div>}>
              <OtherComponent onClick={addTodo} title='Add' style={{width: '70px'}}/>
            </Suspense>
        </div>
    )
}
export default connect()(Addtodo)

