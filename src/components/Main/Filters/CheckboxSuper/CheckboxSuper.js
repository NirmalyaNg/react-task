import React from 'react';
import classes from './CheckboxSuper.module.css';
const CheckboxSuper = (props) => {
	return (
		<div className={classes.CheckboxSuper}>
			<input
				type="checkbox"
				className={classes.input}
				value={props.value}
				onChange={(e) => props.handleSuperPower(e)}
			/>
			<span className={classes.title}>{props.value}</span>
		</div>
	);
};

export default CheckboxSuper;
