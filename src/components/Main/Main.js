import React from 'react';
import Filters from './Filters/Filters';
import classes from './Main.module.css';
import Cards from './Cards/Cards';
const Main = (props) => {
	return (
		<div className={classes.Main}>
			<Filters
				handleSuperPower={props.handleSuperPower}
				handlePersonalAttributes={props.handlePersonalAttributes}
			/>
			<Cards
				persons={props.persons}
				searchName={props.searchName}
				selectedSuperPowers={props.selectedSuperPowers}
				selectedPersonalAttrs={props.selectedPersonalAttrs}
			/>
		</div>
	);
};

export default Main;
