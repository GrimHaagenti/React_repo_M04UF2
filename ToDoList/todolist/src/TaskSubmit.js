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
	<button onClick={this.handleSubmit}> Añadir </button>

	);


}
}

export default TaskSubmit;
