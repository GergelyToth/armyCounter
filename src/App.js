import React, { Component } from 'react';
import './App.css';

import ArmySheet from './ArmySheet';

class App extends Component {
	componentDidMount() {
		window.addEventListener('recalculate', this.onRecalculate.bind(this));
	}

	onRecalculate(/*evt*/) {
		let units = document.querySelectorAll('.unit .tableRow');
		let sum = 0;
		units.forEach(unit => {
			let counter = parseInt(unit.querySelector('input').value, 10);
			
			if (counter) {
				let points = unit.querySelector('.Points').textContent;
				sum += (counter * points);
			}
		});

		document.getElementById('pointSum').innerHTML = sum;
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h2>Points: <span id="pointSum">0</span></h2>
					<h1 className="App-title">Welcome to 40k army counter</h1>
					<select id="faction">
						<option value="tau">T'au Empire</option>
					</select>
				</header>

				<ArmySheet />
			</div>
		);
	}
}

export default App;
