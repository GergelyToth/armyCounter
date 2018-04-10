import React, { Component } from 'react';
import TableRow from './TableRow';
import './ArrayToTable.css';

class ArrayToTable extends Component {
	render() {
		const items = this.props.items;
		if (!items.length) {
			return (<div>Empty</div>);
		}

		const header = Object.keys(items[0]);

		return (
			<div className="arrayTable">
				<div className="tableHeader">
					<div className="tableCell">Counter</div>
					{header.map(headerItem => <div className="tableCell">{headerItem}</div>)}
				</div>
				{items.map(row => <TableRow data={row} />)}
			</div>
		);
	}
}

export default ArrayToTable;
