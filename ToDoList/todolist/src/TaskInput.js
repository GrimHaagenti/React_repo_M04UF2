import React from 'react'; 


class TaskInput extends React.Component{

	constructor (props){
		super(props);
		this.state = {
		value: ""
	};
}
handleChange = (event)=> {
this.setState({

			value : event.target.value
});

}


	render(){
		return (
			<label htmlFor="task_input">

			Tarea

	<input type="text" id="task_input" onChange={this.handleChange}
	/	>
		{this.state.value}
		</label>


		);
	}
}

export default TaskInput;
