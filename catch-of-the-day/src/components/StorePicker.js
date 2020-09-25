import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	myInput = React.createRef();

	goToStore = (event) => {
		/* prevent form from submitting */
		event.preventDefault();
		/* log value from input */
		const storeName = this.myInput.current.value;
		/* set store name to that value */
		this.props.history.push(`/store/${storeName}`);
	};
	render() {
		return (
			<form className="store-selector" onSubmit={this.goToStore}>
				<h2>Please Enter a Store</h2>
				<input
					type="text"
					ref={this.myInput}
					required
					placeholder="Enter Store Name"
					defaultValue={getFunName()}
				/>
				<button type="submit">Visit Store &gt;</button>
			</form>
		);
	}
}

export default StorePicker;
