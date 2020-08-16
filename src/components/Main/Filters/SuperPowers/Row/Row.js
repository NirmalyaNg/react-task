import React from 'react';
import classes from './Row.module.css';

const SuperPowerRow = (props) => {
	return <div className={classes.Row}>{props.children}</div>;
};

export default SuperPowerRow;
