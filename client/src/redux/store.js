import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import usersReducer from './usersReducer';
import ReduxThunk from 'redux-thunk';

const reducers = combineReducers({
  usersReducer,
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,
    composeEnhancers(applyMiddleware(ReduxThunk)));

export default store;
