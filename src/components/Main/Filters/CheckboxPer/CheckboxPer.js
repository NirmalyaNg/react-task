import React from 'react';
import classes from './CheckboxPer.module.css';
const CheckboxPer = (props) => {
	return (
		<div className={classes.CheckboxPer}>
			<input
				type="checkbox"
				className={classes.input}
				value={props.value}
				onChange={(e) => props.handlePersonalAttributes(e)}
			/>
			<span className={classes.title}>{props.value}</span>
		</div>
	);
};

export default CheckboxPer;
