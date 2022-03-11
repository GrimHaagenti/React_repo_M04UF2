import React from "react";
import './Piesito.css';

class Piesito extends React.Component
{

	constructor (props){
		super(props);
	
	const d = new Date;
	this.state = {
	hours: d.getHours(),
	minutes : d.getMinutes(),
	seconds: d.getSeconds()
	};
	
	this.updateClock = this.updateClock.bind(this);	

	setInterval( () => {
	{this.updateClock()}
			}, 1000);


}


updateClock(){	
const d = new Date;
this.setState({
					hours: d.getHours(),
					minutes: d.getMinutes(),
					seconds: d.getSeconds()
					});}


	render(){
		return(
		<footer> 
		<p> Copy (c) 2022 La Mama de Piesito 
	     {this.state.hours}:{this.state.minutes}:{this.state.seconds} </p>
		</footer>);


	};


}

export default Piesito;
