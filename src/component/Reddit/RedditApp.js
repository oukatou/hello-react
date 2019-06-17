import React from 'react'
import { Provider } from 'react-redux'
import createStore from './configureStore'
import AsyncApp from './container/AsyncApp'

const store = createStore()
store.subscribe(()=>{
  console.log(store.getState())
})

const RedditApp = () => (
    <div className="container">
        <Provider store={store}>
            <AsyncApp />
        </Provider>
  </div>
)

export default RedditApp;