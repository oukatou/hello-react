import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import Addtodo from './Addtodo'
import VisibleTodoList from './containers/VisibleTodoList.js'
import FilterLink from './containers/FilterLink'
const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(()=>{
  console.log(store.getState())
})
const TodoApp = () => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      padding: '20px'}}>
        <Provider store={store}>
            <Addtodo />
            <VisibleTodoList />
            <div style={{display: 'flex',padding: '10px'}}>
              <FilterLink filter="SHOW_ALL">all</FilterLink>
              <FilterLink filter="SHOW_ACTIVE">active</FilterLink>
              <FilterLink filter="SHOW_COMPLETED">completed</FilterLink>
            </div>
        </Provider>
  </div>
)


export default TodoApp;