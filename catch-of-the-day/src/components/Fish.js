import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
	render() {
		const { image, name, price, desc, status } = this.props.details;
		const isAvailable = status === 'available';
		return (
			<li className="menu-fish">
				<img src={image} aria-label={name} alt={name} />
				<h3 className="fish-name">
					{name}
					<span>{formatPrice(price)}</span>
				</h3>
				<p>{desc}</p>
				<button
					disabled={!isAvailable}
					onClick={() => this.props.addToOrder(this.props.index)}
				>
					{isAvailable ? 'Add to Cart' : 'Sold Out'}
				</button>
			</li>
		);
	}
}

export default Fish;
