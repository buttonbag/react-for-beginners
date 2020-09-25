import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
	render() {
		return (
			<div className="inventory">
				<h1>Inventory!!!</h1>
				<AddFishForm addFish={this.props.addFish} />
				<button onClick={this.props.loadFishSamples}>Load Samples</button>
			</div>
		);
	}
}

export default Inventory;
