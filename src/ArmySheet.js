import React, { Component } from 'react';

import Unit from './Unit';

import tau from './data/tau.json';

class ArmySheet extends Component {
	render() {
		return (
			<div className="armysheet">
				{tau.units.map(unit =>
					<Unit key={unit.name} name={unit.name} details={unit.details}/>
				)}
			</div>
		);
	}
}

export default ArmySheet;
