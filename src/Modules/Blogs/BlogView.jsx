import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CardHeading } from '../../Assets/StyleComponent';
import View from './View';
import * as Actions from './Actions';
import BlogStore from './BlogStore';
import Helmet from 'react-helmet';

class BlogView extends React.Component {

  	constructor(props) {
		super(props);
		this.getState = this.getState.bind(this);
		this.state = BlogStore.getViewState();
  	}  
  
	componentDidMount() {
		
        BlogStore.on("change", this.getState);
        Actions.getUser();
		Actions.viewBlog(this.props.match.params.id);
	}  
	
	componentWillUnmount() {
		BlogStore.removeListener('change', this.getState);
	}

	getState = () => {
		this.setState(BlogStore.getViewState());
	}			

  	render() {
		return (	
			<>	
                <Helmet>
					<title>Blogs Management</title>
				</Helmet>					
  				<Card.Header>
					<CardHeading>Blog Detail</CardHeading>
                    <Button as={Link}  to="/blogs" variant="primary" className="card-header-button">
                        <i className="fa fa-arrow-left"></i> Back
                    </Button>
				</Card.Header>			
				<Card.Body className={ this.state.loadingTable ? "disable-card" : "" }>
					{
						this.state.loadingTable ? <div className="spinner"/> : <></> 
					}	
                    {
                        (!this.state.loadingTable) ? <View {...this.state.blog} user={this.state.users} viewEnable={false} /> : <></>
                    }
                    
				</Card.Body>
			</>
		);
 	}
}

export default BlogView;
