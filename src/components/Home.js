import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

export default function Home(props) {
	const {} = props;
	return (
		<div>
			<Link to="/">Home</Link>
			<Link id="formLink" to="/pizza">
				Pizza
			</Link>
			Home
		</div>
	);
}
