import React from 'react';


import List from '@mui/material/List';
import Box from '@mui/material/Box';
import TaskItem from './TaskItem';

import "./TaskList.css"

class TaskList extends React.Component{
	constructor(props){
	super(props);
	this.state={
		tasks : props.tasks,
		tasks_id : props.tasks_id
	};
}

render(){


let t = this.state.tasks;
let tasks =[];


for (let i = 0; i < t.length; i++){

	tasks.push(<TaskItem task={t[i]} key={i}
	order={i}
	task_id={this.state.tasks_id[i]}	
	removeTask={this.props.removeTask}
	/>);

}

return (
<Box className="List" >
	<List  >
		{tasks}	
	</List>
</Box >
);

}
}
export default TaskList;
