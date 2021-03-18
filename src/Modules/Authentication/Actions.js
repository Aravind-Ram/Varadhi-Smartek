import Constants from './Constants';
import Http from '../../Helpers/HttpRequest';
import Dispatcher from './Dispatcher';

export function login(data, callBack) {
       
    Dispatcher.dispatch({
        type: Constants.SET_DISABLE_LOGIN
    })
    Http.setUrl(`/users`)
        .setDispatcher(Dispatcher)
        .setData(data)
        .setMethod('POST')
        .setCallBack(callBack)
        .sendRequest(Constants.LOGIN);
}

export function register(data, callBack) {
            
    Dispatcher.dispatch({
        type: Constants.SET_DISABLE_REGISTER
    })
    Http.setUrl(`/auth/register`)
        .setDispatcher(Dispatcher)
        .setData(data)
        .setMethod('POST')
        .setCallBack(callBack)
        .sendRequest(Constants.REGISTER);
}