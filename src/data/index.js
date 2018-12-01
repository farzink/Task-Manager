import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import environments from '../enums/environments';
import configurationReducer from './reducers/configuration-reducer';
import profileReducer from './reducers/profile-reducer';

const enhancer = (process.env.NODE_ENV !== environments.DEVELOPMENT)
    ? compose(applyMiddleware)
    : compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const reducers = combineReducers({
        configuration: configurationReducer,
        profile: profileReducer
    })


const store = createStore(reducers, {}, enhancer)





export default store