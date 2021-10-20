
import {takeEvery,put,delay} from 'redux-saga/effects'

function *  add_async(){
    yield delay (4000);
    yield put ({type :'add_number_async',value:1});
}
export function* watch_add(){

    yield takeEvery('add_number', add_async)
}