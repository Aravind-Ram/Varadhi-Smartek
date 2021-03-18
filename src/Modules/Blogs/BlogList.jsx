import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory from 'react-bootstrap-table2-filter';
import { Card } from 'react-bootstrap';
import { CardHeading } from '../../Assets/StyleComponent';
import View from './View';
import * as Actions from './Actions';
import BlogStore from './BlogStore';
import Helmet from 'react-helmet';
import queryString from 'query-string';

class BlogList extends React.Component {

  	constructor(props) {
		super(props);
		this.getState = this.getState.bind(this);
		this.onTableChange = this.onTableChange.bind(this);
		this.getBlogList = this.getBlogList.bind(this);
		this.state = BlogStore.getListState();
		this.params = queryString.parse(this.props.location.search)
  	}  
  
	componentDidMount() {
		
		BlogStore.on("change", this.getState);
		Actions.getUser(this.getBlogList);
	}

	getBlogList() {
		const filters = {
			...this.state.filterObject,
			...this.params
		};
		Actions.getList(filters, false);
	}
	
	componentWillUnmount() {
		BlogStore.removeListener('change', this.getState);
	}

	getState = () => {
		this.setState(BlogStore.getListState());
	}		

	onTableChange(type, { page, sizePerPage, filters, sortField, sortOrder, cellEdit }) {
		let obj = {};
        for (const filter in filters) {
			if(filter === 'userId') {
				obj[filter] = this.state.users.filter(user => user.name === filters[filter].filterVal).map(user => user.id);	
			} else {
				obj[filter] = filters[filter].filterVal;
			}
		}
		const filterObj = {
			...obj,
			...this.params
		};
        Actions.getList(filterObj, false);
	}

  	render() {
		return (	
			<>
				<Helmet>
					<title>Blogs Management</title>
				</Helmet>
  				<Card.Header>
					<CardHeading>List of Blogs</CardHeading>										
				</Card.Header>			
				<Card.Body className={ this.state.loadingTable ? "disable-card" : "" }>
					{
						this.state.loadingTable ? <div className="spinner"/> : <></> 
					}
					<BootstrapTable
						remote= { {filter: true}}
						keyField="id"
						data={ this.state.blogs }
						columns={ this.state.tableColumns }
						filter={ filterFactory() }
						onTableChange={ this.onTableChange }
						expandRow={ {
							renderer: row => ( <View {...row} user={this.state.users} viewEnable={true} /> )
						}}
						noDataIndication={() => (<div style={{textAlign: "center"}}>No affiliates available</div>)}
					/>		        
				</Card.Body>
			</>
		);
 	}
}

export default BlogList;
