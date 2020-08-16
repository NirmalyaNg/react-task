import React from 'react';
import classes from './Cards.module.css';
import Card from './Card/Card';
const Cards = (props) => {
	let persons = props.persons;
	if (props.searchName !== '') {
		persons = persons.filter((person) => {
			return person.name.toLowerCase().includes(props.searchName.toLowerCase());
		});
	}

	// For checkbox functionality
	let selectedPersonalAttrs = props.selectedPersonalAttrs;
	let selectedSuperPowers = props.selectedSuperPowers;

	//Index array which contains indexes of the persons whose superpowers and pas match checked check boxes
	let indexes = [];
	let indexes_pa = [];
	//Check if superpowers and pas match for each person
	persons.forEach((person, index) => {
		let count = 0;
		let count_pa = 0;

		//Superpowers array for each person
		let superpwrs = person.superPowers;

		//Personal Attributes array for each person
		let personalAttrs = person.personalAttributes;

		//Check if each person contains atleast one superpower which is checked in checkbox
		selectedSuperPowers.forEach((sp) => {
			if (superpwrs.includes(sp)) {
				count += 1;
			}
		});

		//Check if each person contains atleast one personal Attribute which is checked in checkbox
		selectedPersonalAttrs.forEach((pa) => {
			if (personalAttrs.includes(pa)) {
				count_pa += 1;
			}
		});
		if (count === selectedSuperPowers.length) {
			indexes.push(index);
		} //For exact match

		// if (count >= 1) {
		// 	indexes.push(index);
		// }

		if (count_pa === selectedPersonalAttrs.length) {
			indexes_pa.push(index);
		}
	});

	let personsToDisplay = persons.map((person, index) => (
		<Card
			name={person.name}
			key={index}
			superPowers={person.superPowers}
			personalAttributes={person.personalAttributes}
		/>
	));

	// if either atleast one superpower checkbox is checked or atleast one personal attritube checkbox is checked
	if (selectedSuperPowers.length !== 0 || selectedPersonalAttrs.length !== 0) {
		personsToDisplay = persons.map((person, index) => {
			if (indexes.includes(index) && indexes_pa.includes(index)) {
				return (
					<Card
						name={person.name}
						key={index}
						superPowers={person.superPowers}
						personalAttributes={person.personalAttributes}
					/>
				);
			}
			return null;
		});
	}

	return <div className={classes.Cards}>{personsToDisplay}</div>;
};

export default Cards;
