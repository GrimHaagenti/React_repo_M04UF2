import React from 'react';


import TaskInput from './TaskInput';
import TaskSubmit from './TaskSubmit';
import "./Text_form.css"

class Text_form extends React.Component{
	constructor(props){

	super(props);
	this.state = {
		task: "" 
	};


}

handleSubmit = (event)=> {
	event.preventDefault();	
	this.props.addTask(this.state.task);

}

handleChange = (event)=>{
	
	this.setState({
		task:event.target.value
		});
	}


render (){
	return (

	 	<form  className="form">
		<TaskInput  handleChange={this.handleChange} onSubmit={this.handleSubmit}/>
		<TaskSubmit onSubmit={this.handleSubmit}/>
		</form>

		);
}




}

export default Text_form;
