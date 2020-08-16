import React from 'react';
import classes from './PersonalAttributes.module.css';
import CheckboxPer from '../CheckboxPer/CheckboxPer';
import Row from '../SuperPowers/Row/Row';
const PersonalAttributes = (props) => {
	return (
		<div className={classes.PersonalAttributes}>
			<h2 className={classes.title}>Personal Attributes</h2>
			<Row className={classes.Row}>
				<CheckboxPer value="Communication" handlePersonalAttributes={props.handlePersonalAttributes} />
				<CheckboxPer value="Loyalty" handlePersonalAttributes={props.handlePersonalAttributes} />
				<CheckboxPer value="Work Ethic" handlePersonalAttributes={props.handlePersonalAttributes} />
				<CheckboxPer value="Flexibility" handlePersonalAttributes={props.handlePersonalAttributes} />
			</Row>
			<Row>
				<CheckboxPer value="Team Player" handlePersonalAttributes={props.handlePersonalAttributes} />
				<CheckboxPer value="Honesty" handlePersonalAttributes={props.handlePersonalAttributes} />
				<CheckboxPer value="Persistance" handlePersonalAttributes={props.handlePersonalAttributes} />
				<CheckboxPer value="Time" handlePersonalAttributes={props.handlePersonalAttributes} />
			</Row>
		</div>
	);
};

export default PersonalAttributes;
