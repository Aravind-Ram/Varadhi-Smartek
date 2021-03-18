import EventEmitter from 'events';
import { textFilter } from 'react-bootstrap-table2-filter';

import Dispatcher from './Dispatcher';
import Constants from './Constants';
import Toastr from '../../Helpers/Toastr'; 

class UserStore extends EventEmitter {

    constructor() {
		super();   
		/** List State values */     
        this.tableColumns = [{
				dataField: 'id',
				text: 'S. No',  				
				formatter: (cell, row, rowIndex, extraData) => { return rowIndex + 1; }    
			}, {
				dataField: 'name',
				text: 'Name',				
				filter: textFilter()
			}, {
				dataField: 'email',
				text: 'Email',				
				filter: textFilter()
			},{
				dataField: 'phone',
				text: 'Phone Number',				
				filter: textFilter()
			},
		];		
		this.users = [];
		this.loadingTable = true;
		this.filterObject = {};
	}

	getListState() {
		return {
			tableColumns: this.tableColumns,
			users: this.users,
			loadingTable: this.loadingTable,
			filterObject: this.filterObject
		};
	}	

  	setList(response) {		  
		if(response.length > 0) {
			this.users = response;
			this.loadingTable = false;			
      		this.emit("change");
		} else {
			this.users = [];
			this.loadingTable = false;			
      		this.emit("change");
			Toastr.info('Records not found');
		}
  	}  	
	

	handleAction(action) {
		switch(action.type) {			
			case Constants.USER_LIST:
				this.setList(action.data);
				break;
			default:
				console.log("default case Customer Store");
				break;
		}
	}
}
const userStore = new UserStore();
Dispatcher.register(userStore.handleAction.bind(userStore));
export default userStore;