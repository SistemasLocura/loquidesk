import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'; //Add Redux
import rootReducer from './store/reducers/rootreducer'
import { Provider } from 'react-redux'
import firebaseConfig from '../src/config/firebase'
import { FirebaseAppProvider } from 'reactfire';

const store = createStore(rootReducer);

ReactDOM.render((
<FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Provider store={store}>
        <App />
    </Provider>
</FirebaseAppProvider>

), document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
