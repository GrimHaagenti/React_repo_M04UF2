import React from "react";

class MenuItem extends React.Component
{
	constructor (props){
		super(props);

		this.state = { contador: 0};
	}

	render (){
		return(
			<li><a href={this.props.url} onClick={
				/*function(e){
				e.preventDefault();*/

				(e) =>{ 
					e.preventDefault();
					this.setState({contador: this.state.contador+1
					
					});

				
				}
			}

			> {this.props.text} {this.state.contador} </a> </li>
		);
	}

}

export default MenuItem;
