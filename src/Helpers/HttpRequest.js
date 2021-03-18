import axios from 'axios';

const HttpRequest = {

    basePath: "http://extream-api.my/api/",
    url: '',
    method: 'application/json',
    contentType: '',
    data: [],
	callback: null,
	dispatcher: null,
	setDispatcher: function(dispatch) {
		this.dispatcher = dispatch;		
		return this;
	},
    setData: function(data) {
	  this.data = data;
      return this;
    },
    setUrl: function(url) {
	  this.url = url;	  
      return this;
    },
    setMethod: function (method) {
		this.method = method;
		return this;
	},   
	setContentType: function (contentType) {
		this.contentType = contentType;
		return this;
	},
    setCallBack: function(callbackFun) {
		this.callback = callbackFun;		
		return this;
    },
    sendRequest: function(storeType) {
		
		let ths = this;
		let options = {
			method: this.method,
			url: this.url,
			headers: {
				'Accept': 'application/json'				
			}
		};		

		if(this.method === 'GET') {
			options.params = this.data;
		} else {
			options.data = this.data;
		}
		axios.defaults.headers.common['Authorization'] = "Bearer "+localStorage.auth_token;
		axios(options)
			.then(function (response) {	
				if(response.status === 200 || response.status === 201 || response.status === 304) {
					if(storeType) {
						ths.dispatcher.dispatch({
							type: storeType,
							data: response.data
						})
					}
					if(ths.callback) {
						ths.callback(response.data);
						ths.callback = null;
						return ths;
					}
				}
			})
			.catch(function (error) {
				const errorResponse = error;
				switch (errorResponse.status) {
					case 422:
					case 417:
						if(storeType) {
							ths.dispatcher.dispatch({
								type: storeType,
								data: errorResponse.data
							})
						}
						if(ths.callback) {
							ths.callback(errorResponse.data);
							ths.callback = null;
							return ths;
						}
						break;				
					default:
						break;
				}
			})
			.finally(function (response) {
				//console.log(response);
			});
  	}
}
export default HttpRequest;
