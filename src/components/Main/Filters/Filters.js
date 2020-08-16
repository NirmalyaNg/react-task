import React from 'react';
import classes from './Filters.module.css';
import SuperPowers from './SuperPowers/SuperPowers';
import PersonalAttributes from './PersonalAttributes/PersonalAttributes';
const Filters = (props) => {
	return (
		<div className={classes.Filters}>
			<SuperPowers handleSuperPower={props.handleSuperPower} />
			<PersonalAttributes handlePersonalAttributes={props.handlePersonalAttributes} />
		</div>
	);
};

export default Filters;
