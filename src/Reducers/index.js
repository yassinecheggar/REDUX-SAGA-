import {combineReducers} from 'redux';
import page_one_reducer from './page_one_reducer';


const  all_reducers = combineReducers({
    One:page_one_reducer,
     
})
export default all_reducers;