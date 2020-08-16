import React from 'react';
import classes from './NavBar.module.css';
import Logo from '../../assets/images/logo.svg';
const NavBar = (props) => {
	let logo = props.showNavbarLogo ? <img src={Logo} alt="" className={classes.Logo} /> : null;
	return (
		<div className={classes.NavBar}>
			<div className={classes.Hamburger} onClick={props.toggleSideBar}>
				<div />
				<div />
				<div />
			</div>
			{logo}
		</div>
	);
};

export default NavBar;
