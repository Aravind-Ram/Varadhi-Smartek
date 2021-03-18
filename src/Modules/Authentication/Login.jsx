import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import { ErrorText } from '../../Assets/StyleComponent';
import { Form } from 'react-bootstrap';

import LoadingButton from '../../Components/LoadingButton';
import AuthStore from './AuthStore';
import * as Actions from './Actions';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = AuthStore.getLoginState();

        this.getState = this.getState.bind(this);
        this.loginCallBack = this.loginCallBack.bind(this);
    }

    componentDidMount() {
        AuthStore.on("change", this.getState);
        document.body.classList.add("bg-gradient-primary");
    }

    loginCallBack(response) {          
        const authToken = response.email;
        localStorage.setItem("auth_token", authToken);
        this.props.history.push('/home');
    }

    componentWillUnmount() {
        AuthStore.removeListener('change', this.getState);
    }

    getState() {
        this.setState(AuthStore.getLoginState());
    }

    render() {
        return(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                            </div>                                            
                                            <Formik
                                                enableReinitialize={true}
                                                validationSchema={this.state.loginValidation}
                                                initialValues={{
                                                    email: '',
                                                    password: '',
                                                }}
                                                onSubmit={(values, actions) => {
                                                    
                                                    Actions.login(values, this.loginCallBack);
                                                }}
                                            > 
                                            {
                                            props => (  
                                                <Form className="user" onSubmit={props.handleSubmit} onReset={props.handleReset} autoComplete="off">
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Control type="text" name="email" onChange={props.handleChange} defaultValue={props.values.email} className="form-control-user" placeholder="Enter Email Address..." />
                                                        <ErrorMessage name="email">{msg => <ErrorText>{msg}</ErrorText>}</ErrorMessage>
                                                    </Form.Group>
                                                    <Form.Group controlId="formBasicPassword">
                                                        <Form.Control type="password" name="password" onChange={props.handleChange} className="form-control-user" placeholder="Password" />
                                                        <ErrorMessage name="password">{msg => <ErrorText>{msg}</ErrorText>}</ErrorMessage>
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <div className="custom-control custom-checkbox small">
                                                            <Form.Check type="checkbox" name="remember_me" className="custom-control-input" label="Remember Me"/>
                                                            <label className="custom-control-label" htmlFor="customCheck">Remember Me</label>
                                                        </div>
                                                    </Form.Group>
                                                    <LoadingButton 
                                                        type={'submit'}
                                                        disabled={this.state.disableLoginButton}
                                                        loading={this.state.loadingLoginButton}
                                                        text={'Login'}
                                                        variant="primary"
                                                        class={["btn-user btn-block"]}
                                                    />
                                                    <hr />
                                                </Form>
                                            )}
                                            </Formik>                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;