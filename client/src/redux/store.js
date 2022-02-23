import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import userReducer from './reducers/userReducer/userReducer';
import postReducer from './reducers/postReducer/postReducer';
import ReduxThunk from 'redux-thunk';

const reducers = combineReducers({
  userReducer,
  postReducer,
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,
    composeEnhancers(applyMiddleware(ReduxThunk)));

export default store;
