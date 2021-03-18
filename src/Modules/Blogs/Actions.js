import Constants from './Constants';
import Http from '../../Helpers/HttpRequest';
import Dispatcher from './Dispatcher';

export function getList(data, disableFilter = true) {
    
    Http.setUrl(`/posts`)
        .setDispatcher(Dispatcher)
        .setData(disableFilter ? {} : data)
        .setMethod('GET')
        .sendRequest(Constants.BLOG_LIST);
}

export function viewBlog(id) {
    Http.setUrl(`/posts/${id}`)
    .setDispatcher(Dispatcher)    
    .setMethod('GET')
    .sendRequest(Constants.BLOG_VIEW);
}

export function getUser(callback) {

    Http.setUrl(`/users`)
        .setDispatcher(Dispatcher)
        .setMethod('GET')
        .setCallBack(callback)
        .sendRequest(Constants.USER_LIST);
}