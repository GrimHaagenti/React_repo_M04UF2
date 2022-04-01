import React from  "react";


import Title from './Title';

import Text_form from './Text_form';
import TaskList from './TaskList';
import AAA from './'
import logo from './logo.svg';
import './App.css';


class App extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			tasks:[]
		};
	}
		
	componentDidMount = () => {
		fetch("http://10.40.1.113:3030")
			.then(response => response.json())
			.then(data => this.setTasks(data));
};
	


	setTasks = data => {

	this.addTask(data[0].task);

	/*let tasks_ar = [];
	for (let i = 0; i< data.length; i++){tasks_ar.push(data[i].task);
	}	
		this.setState({
			tasks: tasks_ar}
			);
			console.log(this.state.tasks_ar)*/
	};


	addTask = task =>{
		this.state.tasks.push(task);
		this.setState({
		tasks: this.state.tasks
		});
}
removeTask = id_task =>{
this.state.tasks.splice(id_task, 1);
this.setState({
tasks:this.state.tasks

})


}




render (){
 return (
 	<div className="App"    >
		<Title />
		<Text_form addTask={this.addTask} />
		<TaskList tasks={this.state.tasks}
			removeTask={this.removeTask}
		/>


			</div>
 	 );
	}
}
export default App;
