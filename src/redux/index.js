import { createStore, compose,  combineReducers} from 'redux';
import data from './dataReducer';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const rootReducer = combineReducers({
  data,
});

export default createStore(rootReducer, composeEnhancers() );
