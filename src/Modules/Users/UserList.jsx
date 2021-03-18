import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory from 'react-bootstrap-table2-filter';
import { Card } from 'react-bootstrap';
import { CardHeading } from '../../Assets/StyleComponent';
import View from './View';
import * as Actions from './Actions';
import UserStore from './UserStore';
import Helmet from 'react-helmet';

class UserList extends React.Component {

  	constructor(props) {
		super(props);
		this.getState = this.getState.bind(this);
		this.onTableChange = this.onTableChange.bind(this);
		this.state = UserStore.getListState();
  	}  
  
	componentDidMount() {
		
		UserStore.on("change", this.getState);
		Actions.getList(this.state.filterObject, false);
	}  
	
	componentWillUnmount() {
		UserStore.removeListener('change', this.getState);
	}

	getState = () => {
		this.setState(UserStore.getListState());
	}		

	onTableChange(type, { page, sizePerPage, filters, sortField, sortOrder, cellEdit }) {
		let obj = {};
        for (const filter in filters) {
            obj[filter] = filters[filter].filterVal;
		}
        Actions.getList(obj, false);
	}

  	render() {
		return (	
			<>	
				<Helmet>
					<title>Users Management</title>
				</Helmet>					
  				<Card.Header>
					<CardHeading>List of Users</CardHeading>										
				</Card.Header>			
				<Card.Body className={ this.state.loadingTable ? "disable-card" : "" }>
					{
						this.state.loadingTable ? <div className="spinner"/> : <></> 
					}
					<BootstrapTable
						remote= { {filter: true}}
						keyField="email"
						data={ this.state.users }
						columns={ this.state.tableColumns }
						filter={ filterFactory() }
						onTableChange={ this.onTableChange }
						expandRow={ {
							renderer: row => ( <View {...row} /> )
						}}
						noDataIndication={() => (<div style={{textAlign: "center"}}>No affiliates available</div>)}
					/>		        
				</Card.Body>
			</>
		);
 	}
}

export default UserList;
