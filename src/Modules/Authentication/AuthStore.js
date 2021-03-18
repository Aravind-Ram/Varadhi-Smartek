import EventEmitter from 'events';
import * as Yup from 'yup';

import Toastr from '../../Helpers/Toastr';
import Dispatcher from './Dispatcher';
import Constants from './Constants';

class AuthStore extends EventEmitter {

    constructor() {

        super();
        /** Login States */    
        this.loginValidation = Yup.object().shape({
			email: Yup.string().email('Invalid email').required('Email required'),
			password: Yup.string().max(12, 'Too Long!').required('Password required'),
        });
        this.loadingLoginButton = false;
        this.disableLoginButton = false;
        this.validationTitleLogin = '';                
    }

    getLoginState() {
        return {
            loginValidation: this.loginValidation,
            loadingLoginButton: this.loadingLoginButton,
            disableLoginButton: this.disableLoginButton,            
            validationTitleLogin: this.validationTitleLogin
        };
    }    
    
    login(response) {   
        if(response.status === 200) {
            Toastr.success(response.message);
        }
        if(response.status === 422 || response.status === 417) {
            this.validationTitleLogin = response.message;            
            Toastr.error(response.message);
        }        
        this.loadingLoginButton = false;
        this.disableLoginButton = false;
		this.emit("change");
	}		    

    handleAction(action) {

		switch(action.type) {			
            case Constants.LOGIN:
				this.login(action.data);
                break;
            case Constants.SET_DISABLE_LOGIN:
                this.loadingLoginButton = true;
                this.disableLoginButton = true;
                this.emit("change");
                break;
			default:
				console.log("default case");
				break;
		}
	}
}

const authStore = new AuthStore();
Dispatcher.register(authStore.handleAction.bind(authStore));
export default authStore;