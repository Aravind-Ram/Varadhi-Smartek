import EventEmitter from 'events';
import { textFilter } from 'react-bootstrap-table2-filter';

import Dispatcher from './Dispatcher';
import Constants from './Constants';
import Toastr from '../../Helpers/Toastr'; 

class BlogStore extends EventEmitter {

    constructor() {
		super();   
		/** List State values */     
        this.tableColumns = [{
				dataField: 'id',
				text: 'S. No',  				
				formatter: (cell, row, rowIndex, extraData) => { return rowIndex + 1; }    
			}, {
				dataField: 'userId',
				text: 'Author',
				filter: textFilter(),
				formatter: (cell) => {
					return this.users.filter(user => user.id === cell).map(user => user.name);
				}
			}, {
				dataField: 'title',
				text: 'Title',				
				filter: textFilter()
			}
		];		
		this.blogs = [];
		this.blog = {};
		this.loadingTable = true;
		this.filterObject = {};
		this.users = [];
	}

	getListState() {
		return {
			tableColumns: this.tableColumns,
			blogs: this.blogs,
			users: this.users,
			loadingTable: this.loadingTable,
			filterObject: this.filterObject
		};
	}	

	getViewState() {
		return {
			blog: this.blog,
			users: this.users,
			loadingTable: this.loadingTable,
		};
	}

	setView(response) {
		if(response) {
			this.blog = response;
			this.loadingTable = false;			
      		this.emit("change");
		} else {
			this.blog = [];
			this.loadingTable = false;			
      		this.emit("change");
			Toastr.info('Records not found');
		}
	}

  	setList(response) {		  
		if(response.length > 0) {
			this.blogs = response;
			this.loadingTable = false;			
      		this.emit("change");
		} else {
			this.blogs = [];
			this.loadingTable = false;			
      		this.emit("change");
			Toastr.info('Records not found');
		}
	}



	setUsers(response) {
		if(response.length > 0) {
			this.users = response;
      		this.emit("change");
		}
	}
	  
	

	handleAction(action) {
		switch(action.type) {			
			case Constants.BLOG_LIST:
				this.setList(action.data);
				break;
			case Constants.USER_LIST:
				this.setUsers(action.data);
				break;
			case Constants.BLOG_VIEW:
				this.setView(action.data);
				break;
			default:
				console.log("default case Customer Store");
				break;
		}
	}
}
const store = new BlogStore();
Dispatcher.register(store.handleAction.bind(store));
export default store;