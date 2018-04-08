import React, { Component } from 'react';

import ArrayToTable from './utils/ArrayToTable';

class Unit extends Component {
	render() {
		const name = this.props.name;
		const details = this.props.details;

		return (
			<div className="unit">
				<h1>{name}</h1>
				<ArrayToTable items={details} />
			</div>
		);
	}
}

export default Unit;
