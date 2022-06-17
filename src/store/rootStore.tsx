import {createStore, combineReducers} from 'redux';
import homeReducer from '../Home/home-reducer';

const rootReducer = combineReducers({
  charectors : homeReducer
});

const configureStore = () => createStore(rootReducer);

export default configureStore;

