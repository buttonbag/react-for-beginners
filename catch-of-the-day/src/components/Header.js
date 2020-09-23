import React from 'react';

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* this is a stateless functional component */

/* Same as regular component but unless you need to use a lifecycle hook in your components, you should go for stateless functional components. */

/* better for performance */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const Header = (props) => (
	<header className="top">
		<h1>
			Catch
			<span className="ofThe">
				<span className="of">of</span>
				<span className="the">the</span>
			</span>
			Day
		</h1>
		<h3 className="tagline">
			<span>{props.tagline}</span>
		</h3>
	</header>
);

// class Header extends React.Component {
// 	render() {
// 		return (
// 			<header className="top">
// 				<h1>
// 					Catch
// 					<span className="ofThe">
// 						<span className="of">of</span>
// 						<span className="the">the</span>
// 					</span>
// 					Day
// 				</h1>
// 				<h3 className="tagline">
// 					<span>{this.props.tagline}</span>
// 				</h3>
// 			</header>
// 		);
// 	}
// }

export default Header;
