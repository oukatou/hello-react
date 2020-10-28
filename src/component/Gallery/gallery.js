import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import VisibleProject from './container/VisibleProject'
import VisibleSearchbar from './container/VisibleSearchbar'
import VisibleSort from './container/VisibleSort'

export default function Gallery() {
    return <div style={{ width: '100%', marginTop: 20 }}>
        <Provider store={store}>
            <div style={{ overflow: 'hidden', marginLeft: 90 }}>
                <VisibleSearchbar />
                <VisibleSort />
            </div>
            <VisibleProject />
        </Provider>
    </div>
}