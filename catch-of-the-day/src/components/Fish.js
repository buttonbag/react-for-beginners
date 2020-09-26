import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
	render() {
		const { image, name, price, desc, status } = this.props.details;
		return (
			<li className="menu-fish">
				<img src={image} role="img" aria-label={name} alt={name} />
				<h3 className="fish-name">
					{name}
					<span>{formatPrice(price)}</span>
				</h3>
				<p>{desc}</p>
				<button>Add to Cart</button>
			</li>
		);
	}
}

export default Fish;
