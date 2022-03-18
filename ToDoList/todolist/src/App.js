import React from  "react";


import Title from './Title';

import Text_form from './Text_form';
import TaskList from './TaskList';

import logo from './logo.svg';
import './App.css';


class App extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			tasks:[]
		};
	}
	addTask = task =>{
	console.log("AdA");
		this.state.tasks.push(task);
		this.setState({
		tasks: this.state.tasks
		});
	}

render (){
 return (
 	<div className="App"    >
		<Title />
		<Text_form addTask={this.addTask} />
		<TaskList tasks={this.state.tasks} />


			</div>
 	 );
	}
}
export default App;
