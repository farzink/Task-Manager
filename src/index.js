import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './data';




import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min'


const main = <Provider store={store}>
    <App />
</Provider>

ReactDOM.render(main, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
