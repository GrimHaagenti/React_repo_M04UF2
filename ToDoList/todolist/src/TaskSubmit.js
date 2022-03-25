import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';

import React from 'react';

class  TaskSubmit extends React.Component{
	constructor (props){
	
		super(props);

	}
handleSubmit = (event) => {
	event.preventDefault();
	this.props.onSubmit(event);

}

render(){
	return(
	<Button variant="contained" onClick={this.handleSubmit}>
	<AddCircleIcon />
	</Button>

	);


}
}

export default TaskSubmit;
