import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import Addtodo from './Addtodo'
import VisibleTodoList from './containers/VisibleTodoList.js'
import FilterLink from './containers/FilterLink'
const store = createStore(rootReducer)

store.subscribe(()=>{
  console.log(store.getState())
})
const TodoApp = () => (
    <div className="container">
        <Provider store={store}>
            <Addtodo />
            <VisibleTodoList />
            <FilterLink filter="SHOW_ALL">all</FilterLink>
            <FilterLink filter="SHOW_ACTIVE">active</FilterLink>
            <FilterLink filter="SHOW_COMPLETED">completed</FilterLink>
        </Provider>
  </div>
)


export default TodoApp;