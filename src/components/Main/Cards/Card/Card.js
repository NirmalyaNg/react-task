import React from 'react';
import classes from './Card.module.css';
import Person from '../../../../assets/images/person.jpg';
const Card = (props) => {
	return (
		<div className={classes.Card}>
			<div className={classes.cardHeader}>
				<img
					src={Person}
					alt="Card Person"
					style={{ height: '60px', borderRadius: '50%', border: '5px solid #4b4ded' }}
				/>
				<p>{props.name}</p>
			</div>
			<div className={classes.Section}>
				<p>About</p>
				<p>Bio</p>
				<p>Contact</p>
			</div>

			<div className={classes.superpowers}>
				<h6 className={classes.title}>SuperPowers</h6>
				{props.superPowers.join()}
			</div>
			<div className={classes.personalAttributes}>
				<h6 className={classes.title}>Personal Attributes</h6>
				{props.personalAttributes.map((pa, index) => {
					if (index === 1) {
						return pa + ',' + '\n';
					} else if (index === props.personalAttributes.length - 1) {
						return pa;
					} else {
						return pa + ',';
					}
				})}
			</div>
			<div>
				<div className={classes.range}>
					<input type="range" style={{ width: '100%' }} />
					<div className={classes.cardFooter}>
						<p>Introvert</p>
						<p>Extrovert</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
