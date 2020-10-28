import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import 'antd/dist/antd.css'
import AppRouter from './Router';
import * as serviceWorker from './serviceWorker';
//import { AppContainer } from 'react-hot-loader';

/*const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component></Component>
        </AppContainer>,
        document.getElementById('root')
    )
}
render(AppRouter)
if (module.hot) {
    module.hot.accept('./Router', () => { 
            render(AppRouter);
    })
}*/
ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
