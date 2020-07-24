import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

export default function Pizza(props) {
	const {
		values,
		submit,
		inputChange,
		checkbox,
		validinputChange,
		disabled,
		errors,
	} = props;

	const history = useHistory();

	const routeToConfirm = () => {
		history.push('/congrats');
	};

	const onInputChange = (evt) => {
		const { name, value } = evt.target;
		inputChange(name, value);
	};

	const nameInputChange = (evt) => {
		const { name, value } = evt.target;
		validinputChange(name, value);
	};

	const onCheckboxChange = (evt) => {
		const { name, checked } = evt.target;
		checkbox(name, checked);
	};

	const onSubmit = (evt) => {
		console.log('hello');
		evt.preventDefault();
		submit();
		history.push('/congrats');
	};

	return (
		<div>
			<Link to="/">Home</Link>
			<Link to="/pizza">Pizza</Link>

			<form onSubmit={onSubmit}>
				<div>
					<h2>Create your pizza!</h2>
				</div>

				<div>
					<h4>General information</h4>

					<label>
						Name&nbsp;
						<input
							value={values.name}
							name="name"
							type="text"
							onChange={nameInputChange}
							id="nameInput"
						/>
					</label>
					<div>{errors.name}</div>
					<label>
						Size
						<select name="size" onChange={onInputChange} id="sizeInput">
							<option> Small </option>
							<option> Medium </option>
							<option> Large </option>
							<option> XL </option>
						</select>
					</label>

					<label>
						Gluten Free?
						<label> Yes </label>
						<input
							type="radio"
							name="gluten"
							value="glutenfree"
							id="glutenfreeInput"
							onChange={onInputChange}
						/>
					</label>

					<label>
						No
						<input
							type="radio"
							name="gluten"
							id="glutennotfreeInput"
							value="glutennotfree"
							onChange={onInputChange}
						/>
					</label>
				</div>

				<div>
					<h4>Toppings</h4>
					<label>
						Pineapple
						<input
							type="checkbox"
							name="pineapple"
							id="pineappleInput"
							checked={values.toppings.pineapple === true}
							onChange={onCheckboxChange}
						/>
					</label>

					<label>
						Sausage
						<input
							type="checkbox"
							name="Sausage"
							id="sausageInput"
							checked={values.toppings.Sausage === true}
							onChange={onCheckboxChange}
						/>
					</label>

					<label>
						Ham
						<input
							type="checkbox"
							name="Ham"
							id="hamInput"
							checked={values.toppings.Ham === true}
							onChange={onCheckboxChange}
						/>
					</label>

					<label>
						Cheese
						<input
							type="checkbox"
							name="cheese"
							id="cheeseInput"
							checked={values.toppings.cheese === true}
							onChange={onCheckboxChange}
						/>
					</label>
					<div>
						<label>
							Special Instructions&nbsp;
							<input
								name="special"
								type="text"
								onChange={onInputChange}
								value={values.special}
							/>
						</label>
					</div>
					<button className="smtBtn" disabled={disabled}>
						submit
					</button>
				</div>
			</form>
		</div>
	);
}
