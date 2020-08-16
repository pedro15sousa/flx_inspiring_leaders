import React, { Component } from 'react';
import CardList from '../components//CardList';
import SearchBox from '../components/SearchBox';
import Card from '../components/Card';
import Scroll from '../components/Scroll';
import SocialFollow from '../components/SocialFollow';
import {robots} from '../robots';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

	/*Test comment*/

	/*The following method will be used in the future to fetch the data from a URL, instead of 
		reading it from a manually created object file, robots?*/
	/*componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users').then(response => {
			return response.json();
		}).then(users => {
			this.setState({ robots: users })
		});
	}*/

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	}

	render() {
		const { robots, searchfield } = this.state;

		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		});

		if (this.state.robots.lenght === 0){
			return <h1>Loading</h1>
		}else{
			return (
				<div className='tc'>
					<h1 className='f2 ma3'>INSPIRING LEADERS</h1>
					<SearchBox searchChange={this.onSearchChange} className='pa1'/>
					<div style={{background: 'white' , marginTop:'10px'}}>
						<Scroll>
							<CardList robots={filteredRobots}/>
						</Scroll>
					</div>
					<div className='footer'>
						<SocialFollow/>
					</div>
				</div>
			);
		}
	}
}

export default App;