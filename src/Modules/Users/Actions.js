import Constants from './Constants';
import Http from '../../Helpers/HttpRequest';
import Dispatcher from './Dispatcher';

export function getList(data, disableFilter = true) {
    
    Http.setUrl(`/users`)
        .setDispatcher(Dispatcher)
        .setData(disableFilter ? {} : data)
        .setMethod('GET')
        .sendRequest(Constants.USER_LIST);
}