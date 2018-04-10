import React, { Component } from 'react';

class TableRow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0
		};
	}

	componentDidUpdate() {
		let event = new CustomEvent('recalculate', {
			detail: {
				data: this.props.data,
				counter: this.state.counter
			}
		});
		window.dispatchEvent(event);
	}

	onCounterClick(add=true) {
		let counter = this.state.counter;
		if (counter === 0 && !add) {
			return;
		}
        
		this.setState({
			counter: add ? counter + 1 : counter -1
		});
	}

	onCounterChange(evt) {
		let counter = parseInt(evt.target.value, 10);
		if (counter >= 0) {
			this.setState({ counter });
		}
	}

	render() {
		const row = this.props.data;

		return (
			<div className="tableRow">
				<div className="tableCell">
					<button className="minus" onClick={this.onCounterClick.bind(this, false)}>-</button>
					<input value={this.state.counter} onChange={this.onCounterChange.bind(this)} />
					<button className="plus" onClick={this.onCounterClick.bind(this, true)}>+</button>
				</div>
				{Object.entries(row).map(zip => <div className={`tableCell ${zip[0]}`}>{zip[1]}</div>)}
			</div>
		);
	}
}

export default TableRow;
