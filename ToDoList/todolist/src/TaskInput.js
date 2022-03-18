import React from 'react'; 


class TaskInput extends React.Component{

	constructor (props){
		super(props);
		this.state = {
		value: ""

	};
}
	handleChange = (event)=>{
	this.props.handleChange(event);
		this.setState({
			value : event.target.value

});

}


	render(){
		return (
			<label htmlFor="task_input">

			Tarea

	<input type="text" id="task_input" value={this.state.value}  onChange={this.handleChange}/>
	
		</label>


		);
	}
}

export default TaskInput;
