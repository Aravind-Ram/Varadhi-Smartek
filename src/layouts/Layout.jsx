import React from 'react';
import Router from './Router';
import Header from './Header';

class Layout extends React.Component {
    

    componentDidMount() {
        document.body.classList.remove("bg-gradient-primary");
    }

    render() {
        return (
            <div id="wrapper">
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Header/>
                        <div className="container-fluid" style={{marginTop:"1%"}}>
                            <Router/>                            
                        </div>
                    </div>
                </div>
            </div>     
        )
    }
}

export default Layout;