import React from 'react';
import classes from './SuperPowers.module.css';
import CheckboxSuper from '../CheckboxSuper/CheckboxSuper';
import Row from './Row/Row';
const SuperPowers = (props) => {
	return (
		<div className={classes.SuperPowers}>
			<h2 className={classes.title}>SuperPowers</h2>
			<Row>
				<CheckboxSuper value="UI/UX Designing" handleSuperPower={props.handleSuperPower} />
				<CheckboxSuper value="Backend Dev" handleSuperPower={props.handleSuperPower} />
				<CheckboxSuper value="AWS" handleSuperPower={props.handleSuperPower} />
				<CheckboxSuper value="ML" handleSuperPower={props.handleSuperPower} />
			</Row>
			<Row>
				<CheckboxSuper value="FrontEnd Dev" handleSuperPower={props.handleSuperPower} />
				<CheckboxSuper value="CyberSecuirity" handleSuperPower={props.handleSuperPower} />
				<CheckboxSuper value="Networking" handleSuperPower={props.handleSuperPower} />
				<CheckboxSuper value="AI" handleSuperPower={props.handleSuperPower} />
			</Row>
		</div>
	);
};

export default SuperPowers;
