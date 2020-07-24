import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

export default function Congrats(props) {
	const { details } = props;
	return (
		<div>
			<Link to="/">Home</Link>
			<Link id="formLink" to="/pizza">
				Pizza
			</Link>
			<Link to="/congrats">Home</Link>
			<div>
				<h1>Congratz your pizza on the way!</h1>{' '}
			</div>

			<h1> {details.name} </h1>
			<p> Size: {details.size} </p>
			<p> Special Instructors: {details.special} </p>
			{!!details.toppings && !!details.toppings.length && (
				<div>
					Toppings:
					<ul>
						{details.toppings.map((like, idx) => (
							<li key={idx}>{like}</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}
