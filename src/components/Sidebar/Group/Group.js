import React from 'react';
import classes from './Group.module.css';

const Group = (props) => {
	const group = props.items.map((item, index) => (
		<p key={index}>
			<i className={'fa fa-' + item.icon} style={{ marginRight: '10px' }} />
			{item.item}
		</p>
	));
	let attachedClasses = [ classes.Group ];
	if (props.noborder) {
		attachedClasses = [ classes.Group, classes.noborder ];
	}
	return <div className={attachedClasses.join(' ')}>{group}</div>;
};

export default Group;
