import React from 'react';
import classes from './Footer.module.css';
import personImage from '../../../assets/images/person.jpg';

const Footer = () => {
	return (
		<div className={classes.Footer}>
			<span>
				<i className="fa fa-bell" />
			</span>
			<img
				src={personImage}
				alt="Person Image"
				style={{ width: '50px', borderRadius: '50%', border: '5px solid #4b4ded' }}
			/>
			<span>
				<i className="fa fa-home" />
			</span>
		</div>
	);
};

export default Footer;
